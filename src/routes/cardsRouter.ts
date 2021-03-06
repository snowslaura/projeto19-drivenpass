import { Router } from "express";
import { createCard, deleteCard, fetchCard, fetchCards } from "../controllers/cardsController.js";
import { cardValidator } from "../middlewares/cardMiddleware.js";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";


const cardsRouter = Router();

cardsRouter.post('/cards',tokenValidator,cardValidator, createCard)
cardsRouter.get('/cards',tokenValidator, fetchCards)
cardsRouter.get('/cards/:id',tokenValidator, fetchCard)
cardsRouter.delete('/cards/:id',tokenValidator, deleteCard)

export default cardsRouter;