import { NextFunction, Request, Response } from "express";
import noteSchema from "../schema/noteSchema.js";

export async function noteValidator(req : Request,res: Response, next: NextFunction){
    const {error} = noteSchema.validate(req.body, { abortEarly: false})
    if (error){
        return res.status(422).send(error.details)
    }
    next();
}