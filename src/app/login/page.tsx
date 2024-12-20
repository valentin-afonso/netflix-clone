import Image from "next/image";
// import { getAuthSession } from "@/lib/auth";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "@/app/ui/auth/LoginForm";

export default async function Page() {
  // const session = await getAuthSession();
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/browser");
  }

  return (
    <div className="flex h-screen max-h-screen overflow-hidden justify-center">
      <div className="w-1/2 hidden lg:block">
        <Image
          src="/imgCoverLogin.jpg"
          width={1333}
          height={2000}
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <LoginForm />
    </div>
  );
}
