const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
