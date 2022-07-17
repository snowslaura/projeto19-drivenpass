import {Request, Response} from "express"
import * as noteService from "../services/safeNotesService.js"

export async function createNote(req: Request, res: Response){
    const { title, note } = req.body
    const userId:number = res.locals.userId
    await noteService.createNote({userId,title, note})
    res.sendStatus(201)    
}

export async function fetchNotes(req: Request, res: Response){
    const userId:number = res.locals.userId
    const notes = await noteService.fetchNotes(userId)
    res.status(200).send(notes)    
}

export async function deleteNotes(req: Request, res: Response){
    const userId:number = res.locals.userId
    const id: number = parseInt(req.params.id)
    await noteService.deleteNote(userId,id)
    res.sendStatus(200)
}