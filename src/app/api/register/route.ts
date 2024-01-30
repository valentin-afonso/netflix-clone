import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
// import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    console.log("name: ", name);
    console.log("email: ", email);
    console.log("name: ", password);
    // const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.create({
      data: {
        email: JSON.stringify(email),
        name: JSON.stringify(name),
      },
    });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occured while registering the user." },
      { status: 500 }
    );
  }
}
