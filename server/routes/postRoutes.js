const express = require("express");
const {
  createPost,
  getPosts,
  getPostById,
  addLike,
  updatePost,
  deletePost,
} = require("../controllers/postContoller");
const validateObjectId = require("../middleware/validateObjectId");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", validateObjectId, getPostById);

router.post("/", createPost);
router.put("/:id", validateObjectId, updatePost);
router.delete("/:id", validateObjectId, deletePost);
router.patch("/:id/like", validateObjectId, addLike);

module.exports = router;
