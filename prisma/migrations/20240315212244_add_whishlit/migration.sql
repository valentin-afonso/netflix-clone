-- CreateTable
CREATE TABLE "Wishlist" (
    "id" TEXT NOT NULL,
    "userID" TEXT,
    "movieID" TEXT,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);
