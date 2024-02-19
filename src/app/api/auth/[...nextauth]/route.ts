import NextAuth, { NextAuthOptions } from "next-auth";

import { authOptions } from "@/lib/auth";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("Missing GITHUB_ID or GITHUB_SECRET environement var");
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
