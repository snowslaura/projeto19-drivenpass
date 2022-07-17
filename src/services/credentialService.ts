import { credentials } from "@prisma/client";
import Cryptr from "cryptr"
import * as credentialsRepository from "./../repositories/credentialsRepository.js"

export type CreateCredentialData = Omit<credentials, "id" | "createdAt">

export async function createCredentials({userId, title, url, userName, password}){
    await verifyUserIdAndTitle(userId, title)
    password = await encryptedPassword(password)
    await credentialsRepository.createCredential({userId, title, url, userName, password})
}

async function verifyUserIdAndTitle(userId:number, title:string){
   const credential = await credentialsRepository.verifyUserIdAndTitle(userId, title)
   if(credential)throw{
    type:"conflict",
    message:"Titulo já existente."
   }
}

async function encryptedPassword(password:string){
    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    return cryptr.encrypt(password);
}

export async function fetchCredentials(userId:number){    
    const credentials = await credentialsRepository.fetchCredentialByUserId(userId)
    return credentials
}

export async function deleteCredentials(userId:number, id:number){ 
    verifyUserIdAndId(userId,id)
    await credentialsRepository.deleteCredential(id)
}

async function verifyUserIdAndId(userId:number, id:number){
    const credential = await credentialsRepository.fetchCredentialByuserIdAndId(userId,id)
    if(!credential)throw{
        type:"unauthorized",
        message:"Não autorizado"
    }
  
}
