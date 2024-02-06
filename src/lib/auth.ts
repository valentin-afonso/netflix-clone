import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

export const getAuthSession = () => {
  return getServerSession(authConfig);
  /*
  const session = await getServerSession(authConfig);
  const jwtToken = session?.token?.jwt;
  console.log("jwtToken: ", jwtToken);
  console.log("jwtToken: ", authConfig);
  */
  // Si un token JWT est présent, renvoyer le contenu du token
  /*if (jwtToken) {
    return jwtToken;
  }*/
  // return session;
};

export const getRequiredAuthSession = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    throw new Error("Session not found");
  }
  return session;
};
