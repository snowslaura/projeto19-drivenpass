import prisma from "../config/database.js"

export async function createNote({userId,title,note}){
    return prisma.safeNotes.create({
        data:{
            userId,
            title,
            note
        }
    })
}

export async function verifyNoteByUserIdAndTitle(userId:number, title:string){
    return prisma.safeNotes.findFirst({
        where:{
            userId,
            title
        }
    })
}

export async function fetchNotes(userId:number){
    return prisma.safeNotes.findMany({
        where:{
            userId
        }
    })
}

export async function verifyNoteByUserIdAndID(userId:number, id:number){
    return prisma.safeNotes.findFirst({
        where:{
            userId,
            id
        }
    })
}

export async function deleteNote(id:number){
    return prisma.safeNotes.delete({
        where:{
            id
        }
    })
}