import { readFileSync } from "node:fs";
import express from "express";
import { createYoga, createSchema } from "graphql-yoga";
import Query from "./resolvers/Query.js";
import User from "./resolvers/User.js";
import Post from "./resolvers/Post.js";
import Comment from "./resolvers/Comment.js";
import Mutation from "./resolvers/Mutation.js";
import db from "./db.js";

const typeDefs = readFileSync("./schema/schema.graphql", "utf8");
const resolvers = {
  Query,
  User,
  Post,
  Comment,
  Mutation,
};

// const context = {
//   db
// };

const schema = createSchema({
  typeDefs,
  resolvers,
});

const app = express();
const yoga = createYoga({
  schema,
  context: {
   db
  },
});

app.use("/graphql", yoga);

app.listen(4000, () => {
  return console.log("Server listening port:4000");
});
