-- CreateEnum
CREATE TYPE "StudyMode" AS ENUM ('FULLTIME', 'PARTTIME');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'DEVELOPER';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "backgroundImage" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "college" TEXT,
ADD COLUMN     "course" TEXT,
ADD COLUMN     "faculty" TEXT,
ADD COLUMN     "phoneNo" TEXT,
ADD COLUMN     "studyMode" "StudyMode";
