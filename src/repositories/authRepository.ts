import { CreateUserData } from "../services/authService.js"
import client from "./../config/database.js"

export async function verifyUserByEmail(email:string){
    return await client.user.findUnique({where: {email}})
}

export async function createUser({email,password}: CreateUserData){
    await client.user.create({
        data: {
            email,
            password
        }
    })
}