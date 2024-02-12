import { User } from "@/app/ui/auth/User";
// import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function AccountSection() {
  // const session = await getAuthSession();
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session ? (
        <div className="">
          <User />
        </div>
      ) : (
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      )}
    </div>
  );
}
