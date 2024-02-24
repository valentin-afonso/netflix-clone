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
  /*
  const name = session.user.name;
  const firstLetter = name?.charAt(0);
  const renderAvatar = () => {
    if (session.user.image) {
      return (
        <Image
          src={session.user.image}
          width={50}
          height={50}
          alt="avatar"
          className="rounded-full"
        />
      );
    } else if (firstLetter) {
      return <div>{firstLetter}</div>;
    }
    return null;
  };
*/
  return (
    <>
      <div className="flex items-center">
        {session.user.image ? (
          <Image
            src={session.user.image}
            width={50}
            height={50}
            alt="avatar"
            className="rounded-full"
          />
        ) : (
          <div className="rounded-full bg-gray w-8 h-8 flex items-center justify-center">
            V
          </div>
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
