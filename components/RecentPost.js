import PostCard from "./PostCard";
export default async function RecentPosts({limit}) {
  let posts = null;
  try {
    const result = await fetch(process.env.URL + '/api/post/get', {
      method: 'POST',
      body: JSON.stringify({ limit: limit, order: 'desc' }),
      cache: 'no-store',
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log('Error getting post:', error);
  }
  return (
    <div className='flex gap-6 flex-col justify-start items-center mb-5'>
      <h1 className='text-4xl w-[75%] font-bold'>Recent articles</h1>
      <div className='flex flex-wrap gap-5 mt-5 w-[75%] justify-start'>
        {posts && posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}