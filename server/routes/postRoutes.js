const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all posts" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single post" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "POST a new post" });
});
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a  post" });
});
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a post" });
});

module.exports = router;
