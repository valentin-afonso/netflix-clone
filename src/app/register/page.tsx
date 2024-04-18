import Image from "next/image";
// import { getAuthSession } from "@/lib/auth";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import RegisterForm from "@/app/ui/auth/RegisterForm";
export default async function page() {
  // const session = await getAuthSession();
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
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
      <RegisterForm />
    </div>
  );
}
