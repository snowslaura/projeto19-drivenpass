import { user } from "@prisma/client"
import * as authRepository from "./../repositories/authRepository.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export type CreateUserData = Omit<user, "id" | "createdAt">

export async function createUser({email,password}:CreateUserData){
    await verifyUserByEmail(email)
    password =  await createPassword(password)
    await authRepository.createUser({email,password})    
}

async function verifyUserByEmail(email:string){
    const user = await authRepository.verifyUserByEmail(email)
    if(user)throw{
        type:"conflict",
        message:"Email já cadastrado"
    }
}

async function createPassword(password:string) {
    return  bcrypt.hashSync(password, parseInt(process.env.SALT))
}

export async function signIn({email,password}:CreateUserData){
    const user:user = await  verifyUserByEmailForSignIn(email)
    await verifyPassword(user,password)
    const token = await generateToken(user)
    return token
}

async function verifyUserByEmailForSignIn(email:string) {
    const user = await authRepository.verifyUserByEmailForSignIn(email)
    if(!user)throw{
        type:"forbidden",
        message:"Email não cadastrado"
    } 
    return user
}

async function verifyPassword(user:user,password: string){
    return bcrypt.compareSync(password, user.password);
}

async function generateToken(user:user){
    const config = { expiresIn: process.env.JWT_EXPIRES_IN};
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, config);    
    return token
}