import { getServerSession } from 'next-auth'
import { authConfig } from "@/pages/api/auth/[...nextauth]";

export const getAuthSession = () => {
    return getServerSession(authConfig)
}

export const getRequiredAuthSession = async() => {
    const session = await getAuthSession()
    if (!session?.user) {
        throw new Error('Session not found')
    }
    return session
}