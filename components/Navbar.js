import React from 'react'
import Link from 'next/link'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    SignUpButton
  } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='w-full gap-12 h-20 flex justify-center items-center border-2 border-black '>
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>About</Link>
      <SignedOut>
      <SignInButton></SignInButton>
      <SignUpButton></SignUpButton>
      </SignedOut>
      
      <SignedIn>
      <UserButton></UserButton>
      </SignedIn>

    </div>
  )
}

export default Navbar
