import Joi from "joi";
import { CreateAnswerData } from "../services/answerService.js";

export const answerSchema = Joi.object<CreateAnswerData>({
  answer: Joi.string().required(),
});
