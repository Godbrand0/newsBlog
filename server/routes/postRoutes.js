const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all posts" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single post" });
});

router.post("/", async (req, res) => {
  const { title, snippet, content, images, likes } = req.body;
  try {
    const post = await Post.create({ title, snippet, content, images, likes });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a  post" });
});
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a post" });
});

module.exports = router;
