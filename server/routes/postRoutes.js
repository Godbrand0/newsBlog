const express = require("express");
const multer = require("multer");

const { storage } = require("../utils/cloudinary");
const upload = multer({ storage });
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

router.post("/", upload.array("images"), createPost);
router.put("/:id", validateObjectId, upload.array("images"), updatePost);
router.delete("/:id", validateObjectId, deletePost);
router.patch("/:id/like", validateObjectId, addLike);

module.exports = router;
