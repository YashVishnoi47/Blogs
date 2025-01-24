"use client";
import React, { useEffect, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
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
  const router = useRouter();
  const path = usePathname;
  const [searchTerm, setSearchTerm] = useState("");
  const SearchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(SearchParams);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    router.push(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(SearchParams);
    const searchTermFromUrl = urlParams.get("searchTerm");

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
      console.log(searchTermFromUrl);
    }
  }, [SearchParams]);

  return (
    <div className="nav relative z-10 w-[100%] h-20  px-4 py-2 flex justify-center items-center">
      <div className="navbg  w-full h-full absolute"></div>

      {/* Left side of the Navbar */}
      <div className="navleft  w-[40%] flex justify-start  items-center  h-full ">
        <div className="logo  flex justify-start items-center h-full">
          <Sheet>
            <SheetTrigger className="hover:bg-gray-100 flex-shrink-0 px-3 py-3 rounded-xl transition-all duration-200 ease-in-out relative z-10">
              <Image src="./menu.svg" width={25} height={25} alt="menu" />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-center items-center sm:w-[300px]"
            >
              <Link
                className="flex justify-center relative z-10 items-center"
                href="/"
              >
                <h1 className="font-semibold  text-3xl">Yash's Blog</h1>
              </Link>

              <SheetTitle></SheetTitle>
              {/* Links  */}
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
                    href={"/search"}
                  >
                    <Image
                      src={"./search.svg"}
                      width={30}
                      height={30}
                      alt="icon"
                    />
                    Search
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
                  {/*  <Link
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
          <Link className="relative z-10" href="/">
            <h1 className="font-semibold  text-3xl">Yash's Blog</h1>
          </Link>
        </div>
      </div>

      {/* Right Side of the navbar */}
      <div className="navright relative z-8 w-[40%] h-full flex justify-end items-center gap-4  ">
        {/* Search Form  */}
        {/* <form
          onSubmit={handleSubmit}
          className="search  flex justify-center items-center  min-w-[80%] h-full"
        >
          <input
            className="min-w-[80%] flex-shrink-0 text-md h-[70%] border-2 rounded-3xl p-4"
            placeholder="Search..."
            type="search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            name=""
            id=""
          />
          <button></button>
        </form> */}

        {/* sign in and Profile btn */}
        <div className="flex gap-4">
          <SignedOut>
            <SignInButton className=" flex-shrink-0 cursor-pointer transition-all bg-gray-200 text-black px-6 py-2 rounded-lg border-black border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"></SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton userProfileUrl="/dashboard?tab=profile"></UserButton>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
