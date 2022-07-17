import { NextFunction, Request, Response } from "express";
import cardSchema from "../schema/cardSchema.js"

export async function cardValidator(req : Request,res: Response, next: NextFunction){
    const {error} = cardSchema.validate(req.body, { abortEarly: false})
    if (error){
        return res.status(422).send(error.details)
    }
    next();
}