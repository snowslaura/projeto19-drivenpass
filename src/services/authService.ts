import { user } from "@prisma/client"
import * as authRepository from "./../repositories/authRepository.js"
import bcrypt from "bcrypt"

export type CreateUserData = Omit<user, "id" | "createdAt">

export async function createUser({email,password}:CreateUserData){
    await verifyUserByEmail(email)
    password =  await createPassword(password)
    await authRepository.createUser({email,password})    
}

async function verifyUserByEmail(email:string){
    const user = await authRepository.verifyUserByEmail(email)
    console.log(user)
    if(user)throw{
        type:"conflict",
        message:"Usuário já cadastrado"
    }
}

async function createPassword(password:string) {
    return  bcrypt.hashSync(password, parseInt(process.env.SALT))
}