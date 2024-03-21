import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  console.log(session);
  try {
    if (session && session.user) {
      const movie = await prisma.wishlist.findMany({
        where: {
          userEmail: session.user.email,
        },
      });
      return NextResponse.json({ movie });
    } else {
      return NextResponse.json(
        { message: "No session found for fetching wishlist movies" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "error when fetching movies in wishlist" },
      { status: 500 }
    );
  }
}
