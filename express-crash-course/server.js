import express from "express";
import postsRouter from "./routes/posts.js";

const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON request body
app.use(express.json());

// Routes
app.use("/api/posts", postsRouter);

// Custom error handler (must be last)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.statusCode || 500).json({
    error: err.message || "Internal Server Error",
  });
});

app.listen(port, () =>
  console.log(`✅ Server is running on http://127.0.0.1:${port}`)
);
