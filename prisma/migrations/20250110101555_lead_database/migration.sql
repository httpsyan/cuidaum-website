/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `LeadDatabase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LeadDatabase_phone_key" ON "LeadDatabase"("phone");
