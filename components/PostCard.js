import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <div className="group relative flex w-full rounded-lg border border-gray-300 bg-white shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-300 dark:border-gray-700 dark:bg-gray-800">
      {/* Image Section */}
      <div className="w-[40%] p-4 relative overflow-hidden">
        <Link href={`/post/${post.slug}`}>
          <Image
            src="/image.png"
            alt="post cover"
            className=" object-cover transition-transform duration-300 rounded-lg"
            width={200}
            height={200}
          />
        </Link>
      </div>

      {/* Content Section */}
      <Link
        href={`/post/${post.slug}`}
        className="p-4 flex flex-col justify-between w-[60%] gap-2"
      >
        {/* Post Title */}
        <p className="font-bold text-lg text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-teal-500 transition-all duration-300">
          {post.title}
        </p>

        {/* Post Category */}
        {/* <span className="italic text-sm font-medium text-gray-500 dark:text-gray-400">
          {post.category}
        </span> */}

        {/* Read More Button */}
        <div className="mt-4">
          <span className="inline-block py-2 px-4 text-center text-sm font-semibold text-white bg-teal-500 rounded-full shadow-md hover:bg-teal-600 hover:shadow-lg transition-all duration-300">
            Read More
          </span>
        </div>
      </Link>
    </div>
  );
}
