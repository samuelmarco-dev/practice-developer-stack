import { Answer } from "@prisma/client";
import * as answerRepository from "../repositories/answerRepository.js";

export type CreateAnswerData = Omit<Answer, "id">

async function createAnswer(answer: CreateAnswerData){
    await answerRepository.insert(answer);
}

const answerService = {
    createAnswer
};
export default answerService;
