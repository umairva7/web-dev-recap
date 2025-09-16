let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
  { id: 4, title: "Post Four" },
  { id: 5, title: "Post Five" },
];

// ✅ Get all posts
// GET /api/posts
export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit) || posts.length;
  res.json(posts.slice(0, limit));
};

// ✅ Get single post
// GET /api/posts/:id
export const getPostById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    return next(error);
  }

  res.json(post);
};

// ✅ Create a post
// POST /api/posts
export const createPost = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    const error = new Error("Title is required");
    error.statusCode = 400;
    return next(error);
  }

  const newPost = { id: posts.length + 1, title };
  posts.push(newPost);
  res.status(201).json(newPost);
};

// ✅ Update a post
// PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;

  const postIndex = posts.findIndex((p) => p.id === id);
  if (postIndex === -1) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    return next(error);
  }

  if (!title) {
    const error = new Error("Title is required");
    error.statusCode = 400;
    return next(error);
  }

  posts[postIndex].title = title;
  res.json(posts[postIndex]);
};

// ✅ Delete a post
// DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    const error = new Error("Post not found");
    error.statusCode = 404;
    return next(error);
  }

  posts = posts.filter((p) => p.id !== id);
  res.status(204).end();
};
