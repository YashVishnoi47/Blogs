import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import RecentPosts from "@/components/RecentPost";
import TypingAnimation from "@/components/TypingAnimation";
import Image from "next/image";

export default async function Home() {
  let posts = null;
  try {
    const result = await fetch(process.env.URL + "/api/post/get", {
      method: "POST",
      body: JSON.stringify({ limit: 3, order: "desc" }),
      cache: "no-store",
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log("Error getting post:", error);
  }
  return (
    <div className="select-none relative flex flex-col gap-6 justify-center items-center">
      <div className="bg z-1 w-full h-full absolute "></div>

      {/* Hero Sections */}
    <div className="flex z-2 relative flex-col justify-start items-center  gap-6 p-28 px-3 h-[85vh] min-w-[100%] mx-auto ">
        <Image src="/profile.png" width={150} height={150} alt="profile"/>
        <h1 className="text-3xl font-bold lg:text-6xl">
          <TypingAnimation />
        </h1>

        <p className="text-gray-500 font-medium flex justify-center items-center text-center w-[60%] text-sm sm:text-lg">
          Discover a variety of articles and tutorials on topics such as web
          development, software engineering, and programming languages.
        </p>

        {/* Hero buttons */}
        <div className="flex gap-8">
          <Link
            href="/search"
            className="text-xs sm:text-sm text-teal-500 font-bold "
          >
            <div className="flex items-center w-full">
              <div className="relative group">
                <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl  transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-8 block px-4 py-2 rounded-xl bg-gray-950">
                    <div className="relative z-8 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        See more
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </Link>
          <Link
            href="/search"
            className="text-xs sm:text-sm text-teal-500 font-bold "
          >
            <div className="flex items-center w-full">
              <div className="relative group">
                <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl  transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-8 block px-4 py-2 rounded-xl bg-gray-950">
                    <div className="relative z-8 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        My profile
                      </span>
                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Posts  */}
    <div className="p-3 z-2 w-full relative flex flex-col gap-8 py-7">
        <RecentPosts limit={3} />
        <Link
          href={"/search?category=null"}
          className="text-lg text-teal-500 hover:underline text-center"
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}
