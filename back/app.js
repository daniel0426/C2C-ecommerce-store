const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Post");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DB =
  "mongodb+srv://daniel0426:wjdgudwls12!@cluster0.4kcct.mongodb.net/ecommerce?retryWrites=true&w=majority";
const PORT = 4000;

mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");

    app.listen(PORT, () => {
      console.log("listening on port 4000");
    });
  }
);

//Get all posts - Alexis

app.get("/posts", async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
});

//Get specific post - Alexis

app.get("/posts/:postId", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
});

//Create new post - Daniel

app.post("/posts", async (req, res, next) => {
  try {
    const post = new Post({
      title: req.body.title,
      price: req.body.price,
      condition: req.body.condition,
      imgURL : req.body.imgURL,
      size: req.body.size,
      location: req.body.location,
      paymentType: req.body.paymentType,
      shippingOption: req.body.shippingOption,
    });
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    next(err);
  }
});
