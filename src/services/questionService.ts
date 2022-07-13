import { Question } from "@prisma/client";
import * as questionRepository from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id"|"answer">

async function createQuestion(question: CreateQuestionData){
    await questionRepository.insert(question);
}

async function getQuestions(){
    const findMany = await questionRepository.select();
    return findMany;
}

async function getQuestionsId(id: number) {
    const findUnique = await questionRepository.selectById(id);
    return findUnique;
}

const questionService = {
    createQuestion,
    getQuestions,
    getQuestionsId
};
export default questionService;
