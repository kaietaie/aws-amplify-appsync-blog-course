"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { createPost } from "@/graphql/mutations";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { API } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "../../../configureAmplify";
import { useRouter } from "next/navigation";

const initialState = { title: "", content: "" };

function CreatePost() {
  const [post, setPost] = useState(initialState);
  const { title, content } = post;
  const router = useRouter()

  function onChange(e) {
    setPost(() => ({
      ...post,
      [e.target.name]: e.target.value,
    }));
  }

  async function createNewPost({  signOut, user }) {
    if (!title || !content) return;
    const id = uuid();
    post.id = id;
    console.dir(post)
    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push(`/post/${id}`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Create post</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-ful font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <SimpleMdeReact value={post.content} onChange={(value) => setPost({...post, content: value})}/>
      <button
      type="button"
      className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800"
      onClick={createNewPost}
      >
        Create post
      </button>
    </div>
  );
}

      
export default withAuthenticator(CreatePost)