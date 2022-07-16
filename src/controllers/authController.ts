import { Request, Response } from "express"
import * as authService from "./../services/authService.js"
import { CreateUserData } from "./../services/authService.js"

export async function createUser(req: Request,res: Response){
    const {email, password} : CreateUserData = req.body
    await authService.createUser({email,password})
    res.sendStatus(201)
}