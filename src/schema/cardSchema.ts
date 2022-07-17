import joi from "joi";
import DateExtension from "@joi/date"
import JoiImport from "joi"

const Joi = JoiImport.extend(DateExtension) as typeof JoiImport;

const cardSchema = joi.object({
    title:joi.string().required(),
    number: joi.string().creditCard().required(),
    name:joi.string().required(),
    CVV: joi.string().max(3),
    password:joi.string().max(4).required(),
    ExpirationDate: Joi.date().format("MM/YY").required(),
    isVirtual: joi.boolean(),
    type: joi.valid('CREDIT','DEBIT', 'BOTH')
})

export default cardSchema;