/*
  Warnings:

  - You are about to drop the column `userID` on the `Wishlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Wishlist" DROP COLUMN "userID",
ADD COLUMN     "userEmail" TEXT;
