import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  try {
    if (session && session.user) {
      const movie = await prisma.wishlist.findMany({
        where: {
          userEmail: session.user.email,
        },
      });
      return NextResponse.json({ movie });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "error when fetching movies in wishlist" },
      { status: 500 }
    );
  }
}
