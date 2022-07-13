import { CreateAnswerData } from './../services/answerService';
import { Request, Response } from "express";

import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";
import { CreateQuestionData } from './../services/questionService.js';

export async function create(req: Request, res: Response) {
  const { question }: CreateQuestionData = req.body;
  if(!question) return res.sendStatus(400);

  await questionService.createQuestion({question});
  res.sendStatus(200);
}

export async function answer(req: Request, res: Response) {
  const { id } = req.params;
  const { answer }: CreateAnswerData = req.body;
  if(!answer) return res.sendStatus(400);

  await answerService.createAnswer({
    answer, questionId: Number(id)
  });
  res.sendStatus(200);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getQuestions();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const question = await questionService.getQuestionsId(Number(id));
  res.status(200).send(question);
}
