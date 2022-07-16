import { Router } from "express";
import { createUser } from "../controllers/authController";

const authRouter = Router();

authRouter.post('/', createUser)

export default authRouter;