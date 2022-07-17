import prisma from "./../config/database.js"
import { CreateCredentialData } from "../services/credentialService.js"
import { credentials } from "@prisma/client"

export type DeleteCredentialsData = Omit<credentials , "url" | "userName" | "password" | "createdAt">

export async function verifyUserIdAndTitle(userId:number, title:string){
    return prisma.credentials.findFirst({
        where: {userId, title}
    })
}

export async function createCredential({userId, title, url, userName, password}:CreateCredentialData){
    return prisma.credentials.create({
        data: {
        userId,
        title,
        url,
        userName,
        password
        }
    })
}

export async function fetchCredentialByUserId(userId:number){
    return prisma.credentials.findMany({
        where:{
            userId
        }
    })
}

export async function fetchOneCredentialByUserIdAndId(userId:number,id:number){
    return prisma.credentials.findMany({
        where:{
            userId,
            id
        }
    })
}

export async function verifyTitle(userId:number,id:number) {
 return prisma.credentials.findFirst({
    where:{userId,id}
 })
}

export async function fetchCredentialByuserIdAndId(userId:number,id:number){
    return prisma.credentials.findMany({
        where:{
            id,
            userId
        }
    })
}

export async function deleteCredential(id:number){
    return prisma.credentials.delete({
        where: {id}
    })
}