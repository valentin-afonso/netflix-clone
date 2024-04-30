import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  try {
    if (session && session.user) {
      const { movieId } = await request.json();
      await prisma.wishlist.deleteMany({
        where: {
          userEmail: session.user.email,
          movieID: `${movieId}`,
        },
      });
      return NextResponse.json(
        { message: "Movie remove from wishlist successfuly." },
        { status: 201 }
      );
    } else {
      console.log("/removeFromWishlist : no session found");
    }
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while removing from the wishlist." },
      { status: 500 }
    );
  }
}
