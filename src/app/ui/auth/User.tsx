import { LogoutButton } from './LogoutButton';
import { getRequiredAuthSession } from '@/lib/auth';
import Image from 'next/image'

export const User = async () => {
    const session = await getRequiredAuthSession()
    if (!session?.user) {
        return <p>No user</p>
    }
    return (
        <div>
            <div className="w-96 bg-base-100 shadow-xl">
                <div>
                    <div>
                        <div className="w-24">
                        <Image
                            src={session.user.image}
                            width={50}
                            height={50}
                            alt="avatar"
                            className="rounded-full"
                        />
                        </div>
                    </div>
                    <h2>{session.user.name}</h2>
                    <p>{session.user.email}</p>
                    <p>{session.user.id}</p>
                    <div className="justify-end">
                    <LogoutButton />
                    </div>
                </div>
            </div>
        </div>
        
    )
}
