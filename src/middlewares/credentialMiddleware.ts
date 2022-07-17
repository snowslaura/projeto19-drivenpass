import { NextFunction, Request, Response } from "express";
import credentialsSchema from "../schema/credentialsSchema.js"

export async function credentialValidator(req : Request,res: Response, next: NextFunction){
    const {error} = credentialsSchema.validate(req.body, { abortEarly: false})
    if (error){
        return res.status(422).send(error.details)
    }
    next();
}