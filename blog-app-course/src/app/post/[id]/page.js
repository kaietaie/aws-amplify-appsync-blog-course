import { getOnePost } from "@/app/components/posts";

export default async function Post({ params }) {
  const { id } = params;
  const post = await getOnePost(id);
  
  if (post) {

    return (
      <div key={post.id} className="m-1 p-2 w-full bg-[#0B324B]">
      <h2 className="text-2xl font-extrabold dark:text-white">{post.title}</h2>
      <div className="my-4 text-lg text-white-500">{post.content}</div>
      <p className="my-4 mx-6 text-lg text-[#505b7b] text-right italic hover:text-[#a8adbd]">
        {post.username}
      </p>
    </div>
  );
} else {
  return (
    <p>Loading ...</p>
  )
}
}
