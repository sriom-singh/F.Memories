-- AlterTable
ALTER TABLE "Buys" ADD COLUMN     "numOfTraveler" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" TEXT,
ALTER COLUMN "name" DROP NOT NULL;
