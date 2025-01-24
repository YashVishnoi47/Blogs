import Link from "next/link";
import Image from "next/image";
export default function PostCard({ post }) {
  return (
    <div className="group relative justify-between flex w-full rounded-xl border border-black hover:border-2 h-[350px] overflow-hidden hover:rounded-3xl transition-all">
      <div className="w-[40%]">
        <Link className="w-full" href={`/post/${post.slug}`}>
          <Image
            src="/nextpic.jpeg"
            alt="post cover"
            className="h-full border-2 border-black w-full object-cover transition-all duration-300 z-20"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <Link
        className="p-3 flex  relative flex-col w-[58%] gap-2"
        href={`/post/${post.slug}`}
      >
        <p className=" font-bold text-4xl line-clamp-2">{post.title}</p>
        <span className="italic text-md font-semibold">{post.category}</span>
        {/* <span className="italic text-sm" dangerouslySetInnerHTML={{ __html: post?.content }}></span> */}

        {/* <Link
          href={`/post/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute w-full bottom-[-200px] right-0 border border-black text-black rounded-3xl hover:-translate-y-1 transition-all duration-300 text-center py-2 m-2"
        >
          Read article
        </Link> */}
      </Link>
    </div>
  );
}
