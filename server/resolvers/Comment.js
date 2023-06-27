const Comment = {
  post(parent, args, { db }, info) {
    return db.posts.find((post) => post.id === parent.post);
  },
  user(parent, args, { db }, info) {
    return db.users.find((user) => user.id === parent.user);
  },
};

export default Comment;
