import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId, movieId } = await request.json();
    console.log("userId: ", userId);
    console.log("movieId: ", movieId);
    await prisma.wishlist.create({
      data: {
        userID: `${userId}`,
        movieID: `${movieId}`,
      },
    });

    return NextResponse.json(
      { message: "Movie add to wishlist successfuly." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while adding to the wishlist." },
      { status: 500 }
    );
  }
}
