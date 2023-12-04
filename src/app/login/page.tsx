import Title from "../ui/Title"
import { LoginButton } from "@/app/ui/auth/LoginButton";
import Label from "../ui/Label";
import Image from 'next/image'
import { getAuthSession } from "@/lib/auth";
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getAuthSession()
  
  if (session) {
    redirect('/')
  }

  return (
    <div className="flex max-h-screen overflow-hidden">
      <div className="w-1/2">
        <Image
          src="/imgCoverLogin.jpg"
          width={1333}
          height={2000}
          alt="cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col max-w-sm">
          <Title>Sign in to your acount</Title>
          <p>Not a member? <span>Create a account here !</span></p>
          <form >
            <ul>
              <li className="flex flex-col mb-1">
                <Label>Email address</Label>
                <input type="text" id="email" className="py-1.5 px-3 rounded-md border border-gray-500"/>
              </li>
              <li className="flex flex-col mb-1">
                <Label>Password</Label>
                <input type="password" id="password" className="py-1.5 px-3 rounded-md border border-gray-500"/>
              </li>
              <li className="flex justify-between items-center mb-1">
                <div className="flex flex-row-reverse items-center">
                  <Label>Remember me</Label>
                  <input type="checkbox" id="remember-me" className="mr-1" />
                </div>
                <p>Forgot password ?</p>
              </li>
              <li className="mb-1">
                <input type="submit" name="submit" id="submit" value="Sign in" className='btn btn-primary w-full' />
              </li>
            </ul>
          </form>
          <p className="text-center mb-1">OR continue with</p>
          <div className="flex flex-col gap-y-1.5">
            <LoginButton />
            <button className='btn btn-primary'>Member test</button>
          </div>
        </div>
      </div>
    </div>
  )
}
