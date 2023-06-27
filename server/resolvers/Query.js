const Query = {
  user(parent, { id }, { db }, info) {
    return db.users.find((user) => user.id === id);
  },
  users(parent, args, { db }, info) {
    return db.users
  },
  hobby(parent, { id }, { db }, info) {
    return db.hobbies.find((hobby) => hobby.id === id);
  },
  hobbies(parent, args, { db }, info) {
    return db.hobbies
  },
  post(parent, { id }, { db }, info) {
    return db.posts.find((post) => post.id === id);
  },
  posts(parent, args, { db }, info) {
    return db.posts
  },
  comment(parent, { id }, { db }, info) {
    return db.comments.find((comment) => comment.id === id);
  },
  comments(parent, args, { db }, info) {
    return db.comments
  },
};

export default Query;
