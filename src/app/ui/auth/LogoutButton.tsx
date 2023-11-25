'use client'
import {signOut} from 'next-auth/react'

export const LogoutButton = () => {
  return (
    <button
        onClick={async () => {
            await signOut()
        }}
        className='btn btn-primary'
    >Logout</button>
  )
}
