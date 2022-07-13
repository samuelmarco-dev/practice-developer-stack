import Joi from "joi";
import { CreateQuestionData } from "../services/questionService.js";

export const questionSchema = Joi.object<CreateQuestionData>({
  question: Joi.string().required()
});
