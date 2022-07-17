import {Request, Response} from "express"
import * as cardService from "../services/cardService.js"

export async function createCard(req: Request, res: Response){
    const {title, number, name, CVV, password,ExpirationDate,isVirtual,type} = req.body
    const userId:number = res.locals.userId
    await cardService.createCard({userId,title,number, name, CVV, password,ExpirationDate,isVirtual,type})
    res.sendStatus(201)    
}

export async function fetchCards(req: Request, res: Response){
    const userId:number = res.locals.userId
    const card = await cardService.fetchCards(userId)
    res.status(200).send(card)    
}

export async function fetchCard(req: Request, res: Response){
    const userId:number = res.locals.userId
    const id:number = parseInt(req.params.id)
    const card = await cardService.fetchOneCard(userId,id)
    res.status(200).send(card)    
}

export async function deleteCard(req: Request, res: Response){
    const userId:number = res.locals.userId
    const id: number = parseInt(req.params.id)
    await cardService.deleteCard(userId,id)
    res.sendStatus(200)
}