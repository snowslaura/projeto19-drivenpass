import { Request, Response } from "express"
import * as authRepository from "./../repositories/authRepository.js"

export async function createUser(req: Request,res: Response){
    const {email, password} = req.body
    await authRepository.createUser(email.password)
    res.send(201)
}