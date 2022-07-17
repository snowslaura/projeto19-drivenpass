import prisma from "../config/database.js"
import { CreateCardData } from "../services/cardService.js"

export async function createCard({userId,title,number, name, CVV, password,ExpirationDate,isVirtual,type}: CreateCardData){
    return prisma.cards.create({
        data:{
            userId,
            title,
            number,
            name, 
            CVV, 
            password,
            ExpirationDate,
            isVirtual,
            type
        }
    })
}

export async function verifyCardByUserIdAndTitle(userId:number, title:string){
    return prisma.cards.findFirst({
        where:{
            userId,
            title
        }
    })
}

export async function fetchCard(userId:number){
    return prisma.cards.findMany({
        where:{
            userId
        }
    })
}
export async function fetchOneCard(userId:number,id:number){
    return prisma.cards.findMany({
        where:{
            userId,
            id
        }
    })
}


export async function verifyNoteByUserIdAndID(userId:number, id:number){
    return prisma.cards.findFirst({
        where:{
            userId,
            id
        }
    })
}

export async function deleteCard(id:number){
    return prisma.cards.delete({
        where:{
            id
        }
    })
}