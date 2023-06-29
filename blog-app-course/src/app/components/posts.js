import { API } from "aws-amplify";
import { listPosts } from "../graphql/queries";

// this method is not working yet

// export async function getServerSideProps() {
//   try {
//       const postData = await API.graphql({
//       query: listPosts,
//     });
//     console.log("working Static Props")
//     console.log(postData)
//     return {
//       props: {
//         postData
//       },
//     };
//   } catch (error) {
//     console.log(error)
//     return {
//         props: {
//           postData: null, // or any default value you want to provide
//         }
//     }
//   }

// }

export default async function Posts() {

  const postData = await API.graphql({
    query: listPosts,
  });

  let data = postData.data.listPosts.items;


  return (
    <div>
      {data
        ? data.map((post) => {
            return (
              <div key={post.id}>
                <p>{post.title}</p>
                <p>{post.content}</p>
              </div>
            );
          })
        : "No posts"}
    </div>
  );
}
