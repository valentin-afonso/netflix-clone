"use client";

import { useState } from "react";
import Title from "@/app/ui/Title";
import { LoginButton } from "@/app/ui/auth/LoginButton";
import Label from "@/app/ui/Label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "@/app/ui/svg/Spinner";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const emailTest = "john-doe@gmail.com";
  const passwordTest = "azerty";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res && res.error) {
        setError("Invalid Credentials");
        setLoading(false);
        return;
      }

      router.push("/browser");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleSubmitUserTest = (e: any) => {
    setEmail(emailTest);
    setPassword(passwordTest);
  };

  return (
    <div className="w-full flex items-center justify-center lg:w-1/2 lg:px-4">
      <div className="flex flex-col w-full max-w-sm">
        <Title>Sign in to your acount</Title>
        <div className="my-5 p-1 bg-gray">
          <p>Not a member?</p>
          <Link href="/register">Create a account here !</Link>
        </div>

        <form onSubmit={handleSubmit}>
          <ul>
            <li className="flex flex-col mb-1">
              <Label>Email address</Label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
                value={email}
                className="py-1.5 px-3 rounded-md border border-gray-500 bg-gray-500"
              />
            </li>
            <li className="flex flex-col mb-1">
              <Label>Password</Label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                value={password}
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
              <button className="btn btn-primary w-full" disabled={loading}>
                {loading && <Spinner />} Sign in
              </button>
            </li>
          </ul>
          {error && (
            <div className="p-1 mb-1 bg-red/50 border border-solid border-red/75 rounded">
              <p className="text-white text-xs">{error}</p>
            </div>
          )}
        </form>
        <div className="flex items-center mb-1">
          <div className="block h-px bg-gray w-full mr-1 grow"></div>
          <p className="text-center whitespace-nowrap">OR continue with</p>
          <div className="block h-px bg-gray w-full ml-1 grow"></div>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <LoginButton />
          <button className="btn btn-primary" onClick={handleSubmitUserTest}>
            Log as test account
          </button>
        </div>
      </div>
    </div>
  );
}
