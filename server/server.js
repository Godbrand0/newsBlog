const dotenv = require("dotenv")
dotenv.config({path: ".env"});
const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");
const adminRoutes = require("./routes/authRoutes");
const cors = require("cors");
const path = require("path");


const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
console.log(`.env file = ${process.env.MONGO_URI}`)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/admin", adminRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
