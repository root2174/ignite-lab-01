/*
  Warnings:

  - A unique constraint covering the columns `[autUseId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "autUseId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Student_autUseId_key" ON "Student"("autUseId");
