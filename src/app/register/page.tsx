import Image from "next/image";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

import RegisterForm from "@/app/ui/auth/RegisterForm";
export default async function page() {
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
      <RegisterForm />
    </div>
  );
}
