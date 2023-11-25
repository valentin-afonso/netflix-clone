import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import GitHubProvider from "next-auth/providers/github";

const githubId = process.env.GITHUB_ID
const githubSecret = process.env.GITHUB_SECRET

if (!githubId || !githubSecret) {
    throw new Error('Missing GITHUB_ID or GITHUB_SECRET environement var')
}

export const authConfig = {
    providers: [
        GitHubProvider({
            clientId: githubId,
            clientSecret: githubSecret,
        })
    ],
    callbacks: {
        session: async ({session, user}) => {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        }
    },
    adapter: PrismaAdapter(prisma)
} satisfies NextAuthOptions

export default NextAuth(authConfig)