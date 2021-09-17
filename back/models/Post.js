const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    // author: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    shippingOption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    comments: [CommentSchema],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
