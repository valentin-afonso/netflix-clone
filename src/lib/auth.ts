import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("Missing GITHUB_ID or GITHUB_SECRET environement var");
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: {
          label: "password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });
          if (!user || !user?.password) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!passwordsMatch) {
            return null;
          }

          // return user;

          return {
            id: `${user.id}`,
            name: user.name,
            email: user.email,
            emailVerified: user.emailVerified,
            password: user.password,
            image: user.image,
          };
        } catch (error) {
          console.log("Error: ", error);
          return null;
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
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
        };
      }
      return token;
    },
    async session({ session }) {
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
      return session;
    },
  },
};
