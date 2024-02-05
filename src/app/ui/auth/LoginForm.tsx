"use client";

import { useState } from "react";
import Title from "@/app/ui/Title";
import { LoginButton } from "@/app/ui/auth/LoginButton";
import Label from "@/app/ui/Label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="flex flex-col max-w-sm">
        <Title>Sign in to your acount</Title>
        <p>Not a member?</p>
        <Link href="/register">Create a account here !</Link>
        <form onSubmit={handleSubmit}>
          <ul>
            <li className="flex flex-col mb-1">
              <Label>Email address</Label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                className="py-1.5 px-3 rounded-md border border-gray-500"
              />
            </li>
            <li className="flex flex-col mb-1">
              <Label>Password</Label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="py-1.5 px-3 rounded-md border border-gray-500"
              />
            </li>
            <li className="flex justify-between items-center mb-1">
              <div className="flex flex-row-reverse items-center">
                <Label>Remember me</Label>
                <input type="checkbox" id="remember-me" className="mr-1" />
              </div>
              <p>Forgot password ?</p>
            </li>
            <li className="mb-1">
              <button className="btn btn-primary w-full">Sign in</button>
            </li>
          </ul>
          {error && <p>{error}</p>}
        </form>
        <p className="text-center mb-1">OR continue with</p>
        <div className="flex flex-col gap-y-1.5">
          <LoginButton />
          <button className="btn btn-primary">Member test</button>
        </div>
      </div>
    </div>
  );
}
