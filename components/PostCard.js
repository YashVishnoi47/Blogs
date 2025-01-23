import Link from 'next/link';
import Image from 'next/image';
export default function PostCard({ post }) {
  return (
    <div className='group relative w-full rounded-xl border border-black hover:border-2 h-[400px] overflow-hidden hover:rounded-3xl sm:w-[430px] transition-all'>
      <Link href={`/post/${post.slug}`}>
        <Image
          src="/nextpic.jpeg"
          alt='post cover'
          className='h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20'
          width={100}
          height={100}
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <span className='italic text-sm'>{post.category}</span>
        <Link
          href={`/post/${post.slug}`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-black text-black rounded-3xl hover:bg-gray-300 hover:text-white transition-all duration-300 text-center py-2 m-2'
        >
          Read article
        </Link>
      </div>
    </div>
  );
}