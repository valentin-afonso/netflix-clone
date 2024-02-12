import ContentUser from "./ContentUser";
import { LogoutButton } from "./LogoutButton";
// import { getRequiredAuthSession } from "@/lib/auth";
import Image from "next/image";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const User = async () => {
  // const session = await getRequiredAuthSession();
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return <p>No user</p>;
  }
  return (
    <>
      <div className="flex items-center">
        {session.user.image && (
          <Image
            src={session.user.image}
            width={50}
            height={50}
            alt="avatar"
            className="rounded-full"
          />
        )}

        <div className="ml-2">
          <ContentUser
            username={session.user.name}
            email={session.user.email}
          />
        </div>
      </div>
    </>
  );
};
