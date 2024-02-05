"use client";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={async () => {
        await signIn("github");
      }}
      className="btn btn-primary"
    >
      Github
    </button>
  );
};
