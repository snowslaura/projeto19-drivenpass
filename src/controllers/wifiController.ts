import {Request, Response} from "express"
import * as wifiService from "../services/wifiService.js"

export async function createWifi(req: Request, res: Response){
    const { title, networkName, password } = req.body
    const userId:number = res.locals.userId
    await wifiService.createWifi({userId,title, networkName, password})
    res.sendStatus(201)    
}

export async function fetchOneWifi(req: Request, res: Response){
    const userId:number = res.locals.userId
    const id:number = parseInt(req.params.id)
    const wifi = await wifiService.fetchOneWifi(userId,id)
    res.status(200).send(wifi)    
}

export async function fetchWifis(req: Request, res: Response){
    const userId:number = res.locals.userId
    const wifis = await wifiService.fetchWifis(userId)
    res.status(200).send(wifis)    
}

export async function deleteWifi(req: Request, res: Response){
    const userId:number = res.locals.userId
    const id: number = parseInt(req.params.id)
    await wifiService.deleteWifi(userId,id)
    res.sendStatus(200)
}