import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(authOptions);

  try {
    if (session && session.user) {
      const movie = await prisma.wishlist.findMany({
        where: {
          userEmail: session.user.email,
        },
      });
      if (movie.length > 0) {
        return NextResponse.json({ movie: movie });
      } else {
        return NextResponse.json({ movie: null });
      }
    } else {
      console.log("error no session found");
    }
  } catch (error) {
    console.log("error when fetching movies in wishlist");
  }
}
