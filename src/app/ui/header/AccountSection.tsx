import { LoginButton } from "@/app/ui/auth/LoginButton";
import { User } from "@/app/ui/auth/User";
import { getAuthSession } from "@/lib/auth";
import Link from 'next/link';

export default async function AccountSection() {
    const session = await getAuthSession()

  return (
    <div>
        {session ? (
            <User />
        ) : (
          <Link
          href='/login'
          className='btn btn-primary'
      >
          Login
      </Link>
        )}
    </div>
    
  )
}
