import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="nav w-[80%] h-24  px-4 py-2 flex justify-center items-center">
      <div className="left w-1/2 flex  justify-start  items-center gap-6 h-full ">
        <div className="logo  flex justify-start items-center h-full">
          <Sheet>
            <SheetTrigger className="hover:bg-gray-100 px-3 py-3 rounded-xl transition-all duration-200 ease-in-out">
              <Image src="./menu.svg" width={25} height={25} alt="menu" />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-center items-center sm:w-[300px]"
            >
              <Link className="flex justify-center items-center" href="/">
                <h1 className="font-semibold text-3xl">Blog</h1>
              </Link>

              <SheetTitle></SheetTitle>

              <div className="links flex flex-col gap-2 w-full h-full">
                <div className="w-full h-1/2 flex flex-col gap-2 justify-start items-start">
                  <Link
                    className="py-2 w-full px-2 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"
                    href={"/"}
                  >
                    <Image
                      src={"./home.svg"}
                      width={30}
                      height={30}
                      alt="icon"
                    />
                    Home
                  </Link>
                  <Link
                    className="py-2 w-full px-2 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"
                    href={"/dashboard/createpost"}
                  >
                    <Image
                      src={"./add.svg"}
                      width={30}
                      height={30}
                      alt="icon"
                    />
                    Create Post
                  </Link>
                  {/* <Link
                    className="py-2 w-full px-2 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"
                    href={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className="py-2 w-full px-2 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center"
                    href={"/"}
                  >
                    Home
                  </Link> */}
                </div>

                <div className="w-full h-1/2 flex flex-col gap-2 justify-end items-start">
                  <SignedIn>
                    <Image
                      src="./logout.svg"
                      width={30}
                      height={30}
                      alt="logout"
                    />
                    <SignOutButton className="py-2 w-full px-2 gap-2 hover:bg-gray-100 rounded-xl transition-all duration-200 ease-in-out  border-red-800 flex justify-start p-4 items-center" />
                  </SignedIn>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/">
            <h1 className="font-semibold text-3xl">Blog</h1>
          </Link>
        </div>
      </div>

      <div className="right h-full flex justify-end items-center gap-4 w-1/2 ">
        <div className="flex gap-4">
          <SignedOut>
            <SignInButton className="cursor-pointer transition-all bg-gray-200 text-black px-6 py-2 rounded-lg border-black border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"></SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
