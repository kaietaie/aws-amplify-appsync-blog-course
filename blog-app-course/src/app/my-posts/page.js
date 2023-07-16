"use client"
import { withAuthenticator } from "@aws-amplify/ui-react";
import { getPostsByUsername } from "../components/posts";
import { Auth } from "aws-amplify";

async function MyPosts() {
  const {username} = await Auth.currentAuthenticatedUser()
  const posts = await getPostsByUsername(username)

    return (
        <div >
          <h1>Your posts</h1>
          <p>Here you can find only your posts</p>
          {posts
          ? posts.map((post) => {
              return (
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
                  <Link href={`/post/${post.id}`}>Reed more</Link>
                </div>
              );
            })
          : "No posts"}
        </div>
    );
  }

  export default withAuthenticator(MyPosts)