import "dotenv/config"; // require("dotenv").config();
import express from "express";
import dbConnection from "./db/connection.js";
import userRouter from "./routes/user.route.js";
import blogRouter from "./routes/blog.route.js";

const app = express();
const port = process.env.APP_PORT || 3001;

// define middlewares
app.use(express.json());

// define routes
app.use("/users", userRouter);
app.use("/blogs", blogRouter);

await dbConnection();
app.listen(port, () => {
  console.log(`app is running on port ${port} 🥂`);
});
