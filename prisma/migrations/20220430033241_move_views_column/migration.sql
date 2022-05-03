/*
  Warnings:

  - You are about to drop the column `views` on the `teachers_disciplines` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "teachers_disciplines" DROP COLUMN "views";

-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
