import { Router } from "express";
import { createUser } from "../controllers/authController.js";
import { createAcountValidator } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post('/signup', createAcountValidator, createUser)

export default authRouter;