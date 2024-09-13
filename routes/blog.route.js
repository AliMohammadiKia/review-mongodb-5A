import express from "express";
import {
  createBlog,
  getBlogById,
  getBlogs,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", createBlog);

export default router;
