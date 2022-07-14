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

async function getQuestionsId(idQuestion: number) {
    const findUnique = await questionRepository.selectById(idQuestion);
    const {id, question, answer} = findUnique;
    return {
        id,
        question,
        answers: answer
    }
}

const questionService = {
    createQuestion,
    getQuestions,
    getQuestionsId
};
export default questionService;
