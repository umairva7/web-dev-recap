import express from 'express';
import postsRouter from './routes/posts.js';

const app = express();
const port = 8080;

// Routes
app.use('/api/posts', postsRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
