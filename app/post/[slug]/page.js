import CallToAction from "@/components/CallToAction";
import RecentPosts from "@/components/RecentPost";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function PostPage({ params }) {
  let post = null;
  try {
    const result = await fetch(process.env.URL + "/api/post/get", {
      method: "POST",
      body: JSON.stringify({ slug: params.slug }),
      cache: "no-store",
    });
    const data = await result.json();
    post = data.posts[0];
  } catch (error) {
    post = { title: "Failed to load post" };
  }
  if (!post || !post.title === "Failed to load post") {
    return (
      <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
        <h2 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
          Post not found
        </h2>
      </main>
    );
  }
  return (
    <main className=" relative flex flex-col max-w-full mx-auto min-h-screen">
      <div className="bg z-1 w-full h-full absolute "></div>
      <h1 className="text-3xl relative z-10 mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post && post.title}
      </h1>
      <Link
        href={`/search?category=${post && post.category}`}
        className="self-center mt-5"
      >
        <Button
          className="relative z-10 px-3 py-2 hover:scale-105 hover:bg-black active:scale-95 transition-all duration-100 ease-in-out "
          color="gray"
          
          size="xs"
        >
          {post && post.category}
        </Button>
      </Link>

      <div className="flex justify-between relative z-10 p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic relative z-10">
          {post && (post?.content?.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl relative z-10 mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      ></div>

      {/* <RecentPosts limit={3} /> */}
    </main>
  );
}
