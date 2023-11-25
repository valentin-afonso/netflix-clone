import { LoginButton } from "./ui/auth/LoginButton";
import { User } from "./ui/auth/User";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession()
  if (session) {
    return <User />
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>🔥 Welcome on Netflix clone</h1>
      <LoginButton />
    </main>
  )
}
