import Image from "next/image";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "@/app/ui/auth/LoginForm";

export default async function Page() {
  const session = await getAuthSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex max-h-screen overflow-hidden">
      <div className="w-1/2">
        <Image
          src="/imgCoverLogin.jpg"
          width={1333}
          height={2000}
          alt="cover"
        />
      </div>
      <LoginForm />
    </div>
  );
}
