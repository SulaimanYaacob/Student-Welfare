-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'MPP');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'STUDENT';
