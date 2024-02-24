"use client";

import { useState } from "react";
import Title from "@/app/ui/Title";
import { LoginButton } from "@/app/ui/auth/LoginButton";
import Label from "@/app/ui/Label";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="flex flex-col w-full max-w-sm">
        <Title>Register</Title>
        <div className="my-5 p-1 bg-gray">
          <p>Already have a account ?</p>
          <Link href="/login">loggin here !</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <ul>
            <li className="flex flex-col mb-1">
              <Label>User name</Label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="username"
                className="py-1.5 px-3 rounded-md border border-gray-500"
              />
            </li>
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
            <li className="mb-1">
              <button className="btn btn-primary w-full">Register</button>
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
        </div>
      </div>
    </div>
  );
}
