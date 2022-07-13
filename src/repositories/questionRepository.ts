import prisma from '../config/database.js';
import { CreateQuestionData } from './../services/questionService.js';

export async function insert(createQuestion: CreateQuestionData){
    await prisma.question.create({
        data: createQuestion
    })
}
