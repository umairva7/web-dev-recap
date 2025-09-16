import express from 'express';
import path from 'path';
const port = process.env.PORT || 5000;
import postsRouter from './routes/posts.js';


const app = express();

// Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
app.use('/api/posts', postsRouter);







app.listen(port, () => console.log(`Server is running on port ${port}`));

