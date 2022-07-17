import joi from "joi";

const credentialsSchema = joi.object({
    userId: joi.number().required(),
    title: joi.string().required(),
    url:joi.string().uri().required(),
    userName:joi.string().required(),
    password:joi.string().required()   
})

export default credentialsSchema;