import { Question } from "@prisma/client";
import * as questionRepository from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id"|"answer">

async function createQuestion(question: CreateQuestionData){
    await questionRepository.insert(question);
}

const questionService = {
    createQuestion
};
export default questionService;
