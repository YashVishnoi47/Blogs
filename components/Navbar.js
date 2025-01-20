import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="w-[30%] border-r-2 h-screen px-4 py-2 flex flex-col justify-between items-centerW">
      {/* Top side of the navbar */}
      <div className="top h-[70%] flex  flex-col justify-start  items-center gap-2 w-full ">
        <div className="logo  w-full flex justify-start items-center h-20">
          <h1 className="font-semibold text-3xl">Blog</h1>
        </div>

        <div className="links w-full mt-6">
          <Link
            className="w-full h-12 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"
            href={"/"}
          >
            {/* <Image src={"./home.svg"} width={30} height={30} alt="icon" /> */}
            Home
          </Link>
          <Link
            className="w-full h-12 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"
            href={"/"}
          >
            {/* <Image src={"./home.svg"} width={30} height={30} alt="icon" /> */}
            Home
          </Link>
          <Link
            className="w-full h-12 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"
            href={"/"}
          >
            {/* <Image src={"./home.svg"} width={30} height={30} alt="icon" /> */}
            Home
          </Link>
          <Link
            className="w-full h-12 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"
            href={"/"}
          >
            {/* <Image src={"./home.svg"} width={30} height={30} alt="icon" /> */}
            Home
          </Link>
        </div>
      </div>

      {/* Bottom side of the navbar */}
      <div className="botton h-[20%] border-t-2 flex flex-col justify-center p-4 items-start gap-1 w-full ">
        <SignedOut>
          <SignInButton className="w-full h-12 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"></SignInButton>
          <SignUpButton className="w-full h-12 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"></SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
