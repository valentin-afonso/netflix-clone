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
         <div className="">
            <Image
                src={session.user.image}
                width={50}
                height={50}
                alt="avatar"
                className="rounded-full"
            />
            <div className='absolute p-5 right-0'>
                <p className='text-sm font-medium text-slate-900'>{session.user.name}</p>
                <p className='text-sm text-slate-500'>{session.user.email}</p>
                <p className='text-sm text-slate-500'>{session.user.id}</p>
                <LogoutButton />
            </div>
            
            
        </div>   
        </>
    )
}
