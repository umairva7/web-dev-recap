const express = require('express');
const path = require('path');
const port = process.env.PORT || 5090;

const app = express();

// Set static folder
//app.use(express.static(path.join(__dirname, 'public')));
let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
];


//Get single post
app.get('/api/posts/:id', (req, res) => {
    const id= parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if(!post) return res.status(404).json({msg: 'Post not found'});
    res.json(post);
});



app.listen(port, () => console.log(`Server is running on port ${port}`));

