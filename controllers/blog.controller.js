import Blog from "../models/Blog.model.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    console.log(blogs);
    res.status(200).send(blogs);
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "name");
    res.status(200).send(blog);
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).send({ data: blog });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};
