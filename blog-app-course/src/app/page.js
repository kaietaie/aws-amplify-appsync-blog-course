import Link from "next/link";
import { getPosts } from "./components/posts";

export default async function Home() {
  const postData = await getPosts();
  let data = postData?.data.listPosts.items;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">All posts</h1>
      <div className="flex flex-wrap">
        {data
          ? data.map((post) => {
              return (
                <Link href={`/post/${post.id}`}>
                  <div key={post.id} className="m-1 p-2 w-full bg-[#0B324B]">
                    <h2 className="text-2xl font-extrabold dark:text-white">
                      {post.title}
                    </h2>
                    <div className="my-4 text-lg text-white-500">
                      {post.content}
                    </div>
                    <p className="my-4 mx-6 text-lg text-[#505b7b] text-right italic hover:text-[#a8adbd]">
                      {post.username}
                    </p>
                  </div>
                </Link>
              );
            })
          : "No posts"}
      </div>
    </div>
  );
}
