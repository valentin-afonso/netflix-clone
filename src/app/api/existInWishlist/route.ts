import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId, movieId } = await request.json();
    const movie = await prisma.wishlist.findMany({
      where: {
        userID: `${userId}`,
        movieID: `${movieId}`,
      },
    });
    console.log("movie: ", movie);
    return NextResponse.json({ movie });
  } catch (error) {
    console.log("error whencheking if movie already exist");
  }
}
