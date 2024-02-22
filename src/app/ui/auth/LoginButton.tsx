"use client";
import { signIn } from "next-auth/react";
import Github from "@/app/ui/svg/Github";

export const LoginButton = () => {
  return (
    <button
      onClick={async () => {
        await signIn("github");
      }}
      className="btn btn-primary flex items-center justify-center"
    >
      <Github /> Login with Github
    </button>
  );
};
