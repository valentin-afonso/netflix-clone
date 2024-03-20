import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  try {
    const { movieId } = await request.json();
    if (session && session.user) {
      const movie = await prisma.wishlist.findMany({
        where: {
          userEmail: session.user.email,
          movieID: `${movieId}`,
        },
      });
      if (movie.length > 0) {
        return NextResponse.json({ movie: movie[0] });
      } else {
        return NextResponse.json({ movie: null });
      }
    } else {
      console.log("/existinwishlist : error no session found");
    }
  } catch (error) {
    console.log("error when cheking if movie already exist");
  }
}
