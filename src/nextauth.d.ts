/*
import type { defaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultUser & {
      id: string;
    };
  }
}
*/
/*
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    password: string;
    email: string;
    emailVerified: string;
    image: string;
  }
  interface Session {
    user: User & {
      id: string;
      name: string;
      password: string;
      email: string;
      emailVerified: string;
      image: string;
    };
  }
}
*/
