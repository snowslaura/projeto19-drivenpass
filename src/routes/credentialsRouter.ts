import { Router } from "express";
import { createCredential, deleteCredentials, fetchCredentials } from "../controllers/credentialsController.js";
import { credentialValidator } from "../middlewares/credentialMiddleware.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.post('/credentials',tokenValidator,credentialValidator, createCredential)
credentialsRouter.get('/credentials',tokenValidator, fetchCredentials)
credentialsRouter.delete('/credentials/:id',tokenValidator, deleteCredentials)

export default credentialsRouter;