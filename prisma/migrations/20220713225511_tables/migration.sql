-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "answerId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
