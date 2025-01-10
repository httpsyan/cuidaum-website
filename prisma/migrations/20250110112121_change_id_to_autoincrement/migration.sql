/*
  Warnings:

  - The primary key for the `LeadDatabase` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `LeadDatabase` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "LeadDatabase" DROP CONSTRAINT "LeadDatabase_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "LeadDatabase_pkey" PRIMARY KEY ("id");
