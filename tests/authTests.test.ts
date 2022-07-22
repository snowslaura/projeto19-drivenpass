import app from "./../src/index.js"
import supertest from "supertest"
import client from "../src/config/database.js";


beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "user" CASCADE;`;
});

describe("POST /signup", () => {
    it("given both valid email and password it should return 201", async () => {
        const body = {
            "email": "teste@driven.com",
            "password": "1234567890"
        };

        const result = await supertest(app).post("/signup").send(body);
        const status = result.status;        
        expect(status).toEqual(201);

        const createdUser = await client.user.findUnique({
            where: { email: body.email }
        });

        expect(createdUser).not.toBeNull();
    });

    it("given an email that is already in use it should return 409", async () =>{
        const body = {
            "email": "teste@driven.com",
            "password": "1234567890"
        };

        const firstTry = await supertest(app).post("/signup").send(body);
        expect(firstTry.status).toEqual(201);

        const secondTry = await supertest(app).post("/signup").send(body);        
        expect(secondTry.status).toEqual(409);
    })

    it("given a password with less than 10 digits it should return 422", async ()=>{
        const body = {
            "email": "teste1@driven.com",
            "password": "12345678"
        };
        const result = await supertest(app).post("/signup").send(body);
        const status = result.status;
        
        expect(status).toEqual(422);
    })
   
});

afterAll(async () => {
    await client.$disconnect();
});