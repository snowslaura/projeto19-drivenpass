import joi from "joi";

const createAcountSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(10).required()
})

export default createAcountSchema;