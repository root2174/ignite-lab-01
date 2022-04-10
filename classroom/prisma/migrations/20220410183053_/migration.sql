/*
  Warnings:

  - You are about to drop the column `autUseId` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authUseId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Student_autUseId_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "autUseId",
ADD COLUMN     "authUseId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Student_authUseId_key" ON "Student"("authUseId");
