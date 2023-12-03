import { LoginButton } from "@/app/ui/auth/LoginButton";
import { User } from "@/app/ui/auth/User";
import { getAuthSession } from "@/lib/auth";

export default async function AccountSection() {
    const session = await getAuthSession()

  return (
    <div>
        {session ? (
            <User />
        ) : (
            <LoginButton />
        )}
    </div>
    
  )
}
