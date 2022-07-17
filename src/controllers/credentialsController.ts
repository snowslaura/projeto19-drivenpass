import { Request, Response } from "express"
import * as credentialService from "./../services/credentialService.js"

export async function createCredential(req: Request, res: Response){   
    const { title, url, userName, password } = req.body
    const userId:number = res.locals.userId
    await credentialService.createCredentials({userId,title, url, userName, password})
    res.sendStatus(201)
}

export async function fetchCredentials(req: Request, res: Response){  
    const userId:number = res.locals.userId
    const credentials = await credentialService.fetchCredentials(userId)
    res.status(200).send(credentials)
}

export async function deleteCredentials(req: Request, res: Response){  
    const userId:number = res.locals.userId
    const id:number = parseInt(req.params.id)
    await credentialService.deleteCredentials(userId,id)
    res.sendStatus(200)
}