import ContentUser from './ContentUser';
import { LogoutButton } from './LogoutButton';
import { getRequiredAuthSession } from '@/lib/auth';
import Image from 'next/image'

export const User = async () => {
    const session = await getRequiredAuthSession()
    if (!session?.user) {
        return <p>No user</p>
    }
    return (
        <>
         <div className="flex items-center">
            <Image
                src={session.user.image}
                width={50}
                height={50}
                alt="avatar"
                className="rounded-full"
            />
            <div className="ml-2">
              <ContentUser 
                username = {session.user.name}
                email = {session.user.email}
                id = {session.user.id}
              />
            </div>
            
        </div>   
        </>
    )
}
