import { NextFunction, Request, Response } from "express";
import createAcountSchema from "../schema/authSchema.js"

export async function createAcountValidator(req : Request,res: Response, next: NextFunction){
    const {error} = createAcountSchema.validate(req.body, { abortEarly: false})
    if (error){
        return res.status(422).send(error.details)
    }
    next();
}