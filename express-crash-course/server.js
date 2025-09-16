import express from 'express';
import path from 'path';
const port = process.env.PORT || 5000;
import postsRouter from './routes/posts.js';
import logger from './middleware/logger.js';

const app = express();

// Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

//logger middleware
app.use(logger);


// Define Routes
app.use('/api/posts', postsRouter);

// Error handling middleware
import errorHandler from './middleware/error.js';
// Custom error handler middleware
app.use((err, req, res, next) => {
  console.error(err.message); // log the error

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
});
app.use(errorHandler);








app.listen(port, () => console.log(`Server is running on port ${port}`));

