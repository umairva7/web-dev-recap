const express = require('express');
const path = require('path');
const port = process.env.PORT || 5090;
const postsRouter = require('./routes/posts');

const app = express();

// Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
app.use('/api/posts', postsRouter);







app.listen(port, () => console.log(`Server is running on port ${port}`));

