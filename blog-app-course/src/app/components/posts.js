import { listPosts, getPost, postsByUsername } from "@/graphql/queries";
import { API, Auth } from "aws-amplify";

export async function getPosts() {
 try {
   const postData = await API.graphql({
     query: listPosts,
   });
   return postData
  
 } catch (error) {
  console.dir(error)
  console.dir(error.message)
 }
}

export async function getOnePost(id) {
  try {
    const postData = await API.graphql({
      query: getPost,
      variables: { id },
    });
    return postData.data.getPost
   
  } catch (error) {
   console.dir(error)
   console.dir(error.message)
  }
 }

 export async function getPostsByUsername(username) {
  try {
    const postData = await API.graphql({
      query: postsByUsername,
      variables: { username }
    });
    return postData.data.postsByUsername.items
   
  } catch (error) {
   console.dir(error)
   console.dir(error.message)
  }
 }