const Mutation = {
  createUser(parent, { data }, { db }, info) {
    const id = `${db.users.length + 1}`;
    db.users.push({ id, ...data });
    console.log(db.users);
    return db.users.find((user) => user.id === id);
  },
  createPost(parent, { data }, { db }, info) {
    const id = `${db.posts.length + 1}`;
    db.posts.push({ id, ...data });
    return db.posts.find((post) => post.id === id);
  },
  createComment(parent, { data }, { db }, info) {
    const id = `${db.comments.length + 1}`;
    db.comments.push({ id, ...data });
    return db.comments.find((comment) => comment.id === id);
  },
};

export default Mutation;
