import { Router } from "express";
import {create, answer, get, getById} from "../controllers/questionController.js";
import { validateSchemaMiddleware } from "./../middlewares/validateSchema.js";
import { answerSchema } from "../schemas/answerSchema.js";
import { questionSchema } from "../schemas/questionSchema.js";

const questionRouter = Router();

questionRouter.post("/questions", validateSchemaMiddleware(questionSchema), create);
questionRouter.post("/questions/:id/answers", validateSchemaMiddleware(answerSchema), answer);
questionRouter.get("/questions", get);
questionRouter.get("/questions/:id", getById);

export default questionRouter;