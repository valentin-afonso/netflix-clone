import type { defaultSession } from 'next-auth'

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultUser & {
            id: string
        }
    }
}