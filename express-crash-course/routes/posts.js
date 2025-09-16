import express from 'express';
const router = express.Router();

let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
  { id: 4, title: 'Post Four' },
  { id: 5, title: 'Post Five' },
];


// @route   GET /api/posts/:id
// @desc    Get single post
router.get('/:id', (req, res,next) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    const error=new Error('Post not found');
    error.status=404;
    return next(error);
  }

  res.json(post);
});

// @route   GET /api/posts
// @desc    Get all posts (with optional ?limit=n query)
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit) || posts.length;
  res.json(posts.slice(0, limit));
});

//Create a new post
router.post('/', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: `Post ${posts.length + 1}`
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

//Update a post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
    if (!post) {
    return res.status(404).json({ msg: 'Post not found' });
    }
    post.title = req.body.title || post.title;
    res.json(post);
});
//Delete a post
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === id);
    if (postIndex === -1) {
    return res.status(404).json({ msg: 'Post not found' });
    }
    posts.splice(postIndex, 1);
    res.json({ msg: 'Post deleted' });
});

export default router;
