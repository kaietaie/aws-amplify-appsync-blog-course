import { listPosts } from "@/graphql/queries";
import { API } from "aws-amplify";

export default async function getPosts() {
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
