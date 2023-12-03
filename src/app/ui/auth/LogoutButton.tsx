'use client'
import {signOut} from 'next-auth/react'

export const LogoutButton = () => {
  return (
    <button
        onClick={async () => {
            await signOut()
        }}
        className='btn mt-4'
    >Logout</button>
  )
}
