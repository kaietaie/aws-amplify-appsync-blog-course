const User = {
  hobby(parent, args, { db }, info) {
    return db.hobbies.find((hobby) => hobby.user === parent.id);
  },
  post(parent, args, { db }, info) {
    return db.posts.filter((post) => post.user === parent.id);
  },
  comment(parent, args, { db }, info) {
    return db.comments.filter((comment) => comment.user === parent.id);
  },
};

export default User;
