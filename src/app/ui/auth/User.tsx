import { LogoutButton } from './LogoutButton';
import { getRequiredAuthSession } from '@/lib/auth';

export const User = async () => {
    const session = await getRequiredAuthSession()
    if (!session?.user) {
        return <p>No user</p>
    }
    return (
        <div>
            <img src={session.user.image} alt="" />
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
            <p>{session.user.id}</p>
            <LogoutButton />
        </div>
        
    )
}
