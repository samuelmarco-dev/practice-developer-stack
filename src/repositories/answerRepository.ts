import prisma from "../config/database.js";
import { CreateAnswerData } from "../services/answerService.js";

export async function insert(createAnswer: CreateAnswerData){
    await prisma.answer.create({
        data: createAnswer
    })
}
