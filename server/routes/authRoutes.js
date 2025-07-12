const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET admin" });
});

module.exports = router;
