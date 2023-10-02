-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_messageId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "messageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
