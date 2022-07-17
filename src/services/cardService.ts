import { cards } from "@prisma/client"
import Cryptr from "cryptr"
import * as cardRepository from "../repositories/cardRepository.js"

export type CreateCardData = Omit<cards, "id" | "createdAt">


export async function createCard({userId,title,number, name, CVV, password,ExpirationDate,isVirtual,type}:CreateCardData){
    await verifyCardByUserIdAndTitle(userId, title)
    password = await encryptedPassword(password)
    cardRepository.createCard({userId,title,number, name, CVV, password,ExpirationDate,isVirtual,type})
}

async function verifyCardByUserIdAndTitle(userId:number, title: string){
    const note = await cardRepository.verifyCardByUserIdAndTitle(userId, title)
    if(note)throw{
        type:"conflict",
        message:"Titulo já existente"
    }
}

async function encryptedPassword(password:string){
    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    return cryptr.encrypt(password);
}

export async function fetchCards(userId: number){
    const cards = await cardRepository.fetchCard(userId)
    return cards
}

export async function fetchOneCard(userId:number,id:number){
    const cards = await cardRepository.fetchOneCard(userId,id)
    if(cards.length===0)throw{
        type:"unprocessable_entity",
        message:"Cartão inexistente"
    }
    return cards
}

export async function deleteCard(userId:number,id:number){
    await verifyNoteByUserIdAndId(userId,id)
    await cardRepository.deleteCard(id)
}

async function verifyNoteByUserIdAndId(userId:number,id:number){
    const note = await cardRepository.verifyNoteByUserIdAndID(userId, id)
    if(!note)throw{
        type:"unauthorized",
        message:"Não autorizado"
    }
}