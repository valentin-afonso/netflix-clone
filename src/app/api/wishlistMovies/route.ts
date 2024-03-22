import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const { email } = await request.json();
  try {
    const movie = await prisma.wishlist.findMany({
      where: {
        userEmail: email,
      },
    });
    return NextResponse.json({ movie });
  } catch (error) {
    return NextResponse.json(
      { message: "error when fetching movies in wishlist" },
      { status: 500 }
    );
  }
}
