import { safeNotes } from "@prisma/client"
import * as notesRepository from "../repositories/safeNotesRepository.js"

export type CreateNoteData = Omit<safeNotes, "id" | "createdAt">


export async function createNote({userId,title, note}:CreateNoteData){
    await verifyNoteByUserIdAndTitle(userId, title)
    notesRepository.createNote({userId,title, note})
}

async function verifyNoteByUserIdAndTitle(userId:number, title: string){
    const note = await notesRepository.verifyNoteByUserIdAndTitle(userId, title)
    if(note)throw{
        type:"conflict",
        message:"Titulo já existente"
    }
}

export async function fetchNotes(userId: number){
    const notes = await notesRepository.fetchNotes(userId)
    return notes
}

export async function fetchOneNote(userId:number,id:number){
    const note = await notesRepository.fetchOneNote(userId,id)
    if(note.length===0)throw{
        type:"unprocessable_entity",
        message:"Nota inexistente"
    }
    return note
}

export async function deleteNote(userId:number,id:number){
    await verifyNoteByUserIdAndId(userId,id)
    await notesRepository.deleteNote(id)
}

async function verifyNoteByUserIdAndId(userId:number,id:number){
    const note = await notesRepository.verifyNoteByUserIdAndID(userId, id)
    if(!note)throw{
        type:"unauthorized",
        message:"Não autorizado"
    }
}