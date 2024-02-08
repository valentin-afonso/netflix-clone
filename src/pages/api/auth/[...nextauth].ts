import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "@/lib/prisma";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("Missing GITHUB_ID or GITHUB_SECRET environement var");
}

export const authConfig = {
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
          console.log("user: ", user);
          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
    GitHubProvider({
      id: "github",
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      } else if (account) {
        token.id = account.providerAccountId;
      }
      return token;
    },
    session: async ({ session, token, user }) => {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        image: token.image,
      };
      // console.log("session: ", session);

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions;

export default NextAuth(authConfig);
