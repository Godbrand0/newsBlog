const Post = require("../models/Post");

//get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

//get single post
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create new post
const createPost = async (req, res) => {
  try {
    const { title, snippet, content, likes } = req.body;
    const imageUrls = req.files.map((file) => file.path);
    const newPost = await Post.create({
      title,
      snippet,
      content,
      images: imageUrls,
      likes,
    });
    res.status(200).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(400).json({ error: error.message });
  }
};

// add like
const addLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    post.likes += 1;
    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete post
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await Post.findOneAndDelete({ _id: id });
    if (!deletedPost)
      return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedPost = await Post.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
      { new: true, runValidators: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  addLike,
  deletePost,
  updatePost,
};
