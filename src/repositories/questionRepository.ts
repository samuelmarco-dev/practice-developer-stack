import prisma from '../config/database.js';
import { CreateQuestionData } from './../services/questionService.js';

export async function insert(createQuestion: CreateQuestionData){
    await prisma.question.create({
        data: createQuestion
    })
}

export async function select(){
    const questions = await prisma.question.findMany();
    return questions;
}

export async function selectById(id: number) {
    const question = await prisma.question.findUnique({
        where: { id }
    });
    return question;
}
