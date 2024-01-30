"use client";

import { useState } from "react";
import Title from "@/app/ui/Title";
import { LoginButton } from "@/app/ui/auth/LoginButton";
import Label from "@/app/ui/Label";
import Link from "next/link";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }
    try {
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
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="flex flex-col max-w-sm">
        <Title>Register</Title>
        <p>Already have a account ?</p>
        <Link href="/login">loggin here !</Link>
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
              <input
                type="submit"
                name="submit"
                id="submit"
                value="Sign in"
                className="btn btn-primary w-full"
              />
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
