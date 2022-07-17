import { Router } from "express";
import { tokenValidator } from "../middlewares/tokenMiddleware.js";
import {createNote, deleteNotes, fetchNotes, fetchOneNote} from "./../controllers/safeNotesController.js"
import { noteValidator } from "../middlewares/noteMiddlaware.js";


const safeNotesRouter = Router();

safeNotesRouter.post('/safenotes',tokenValidator,noteValidator, createNote)
safeNotesRouter.get('/safenotes',tokenValidator, fetchNotes)
safeNotesRouter.get('/safenotes/:id',tokenValidator, fetchOneNote)
safeNotesRouter.delete('/safenotes/:id',tokenValidator, deleteNotes)

export default safeNotesRouter;