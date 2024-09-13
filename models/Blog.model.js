import mongoose from "mongoose";
import User from "./User.model.js";

// define schema
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

blogSchema.pre("save", async function (next) {
  const user = await User.findById(this?.author);
  if (!user?._id) {
    return next(new Error("user not found"));
  }
  next();
});

// define model
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
