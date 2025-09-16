const express = require('express');
const router = express.Router();

let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' },
    { id: 4, title: 'Post Four' },
    { id: 5, title: 'Post Five' },
];

//Get single post
router.get('/:id', (req, res) => {
    const id= parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if(!post) return res.status(404).json({msg: 'Post not found'});
    res.json(post);
});

//Get all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit) || posts.length;
    res.json(posts.slice(0, limit));
});


module.exports = router;