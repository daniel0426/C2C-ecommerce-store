const express = require("express");
const mongoose = require("mongoose");
const Account = require("./models/Account");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const Post = require("./models/Post");

const app = express();

const cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

const DB =
  "mongodb+srv://daniel0426:wjdgudwls12!@cluster0.4kcct.mongodb.net/ecommerce?retryWrites=true&w=majority";
const PORT = 4000;

mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to DB");

    app.listen(PORT, () => {
      console.log("listening on port 4000");
    });
  }
);

// ---------------- MIDDLEWARE FOR ROUTE AUTH - ALEXIS ------------------ //

app.use(cookieParser());

const authUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    console.log("User not logged in");
    return res
      .status(401)
      .json({ message: "Access denied - User not logged in" });
  } else {
    jwt.verify(token, "monkeyPuzzle", (err, decodedToken) => {
      if (err) {
        console.log(err);
        return res.status(401).json(err.message);
      } else {
        req.userId = decodedToken.id;
        next();
      }
    });
  }
};

//Get all posts - Alexis

app.get("/posts", async (req, res, next) => {
  try {
    const posts = await Post.find().populate("author", "email fname lname");
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
});

//Get specific post - Alexis

app.get("/posts/:postId", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate("author", "email fname lname")
      .populate("comments.author", "email fname lname");
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
});

//Create new post - Daniel

app.post("/posts", authUser, async (req, res, next) => {
  try {
    const post = new Post({
      title: req.body.title,
      author: req.userId,
      price: req.body.price,
      category: req.body.category,
      condition: req.body.condition,
      imgURL: req.body.imgURL,
      size: req.body.size,
      location: req.body.location,
      paymentType: req.body.paymentType,
      shippingOption: req.body.shippingOption,
      description: req.body.description,
      comments: [],
    });
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    next(err);
  }
});

//Update post - Daniel

app.patch("/posts/:postId", authUser, async (req, res, next) => {
  try {
    const updatePost = {
      title: req.body.title,
      price: req.body.price,
      imgURL: req.body.imgURL,
      category: req.body.category,
      condition: req.body.condition,
      size: req.body.size,
      location: req.body.location,
      paymentType: req.body.paymentType,
      shippingOption: req.body.shippingOption,
      description: req.body.description,
      comments: [],
    };
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      updatePost
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
});

//Delete post - Daniel
app.delete("/posts/:postId", async (req, res, next) => {
  if (user === post.author.id) {
    try {
      console.log("deleted");
      const deletePost = await Post.findByIdAndDelete(req.params.postId);
      res.status(200).json(deletePost);
    } catch (err) {
      next(err);
    }
  }
});

//Account endpoints
app.get("/account", authUser, async (req, res, next) => {
  try {
    const user = await Account.findById(req.userId);

    return res.status(200).json({
      id: user._id,
      email: user.email,
      fname: user.fname,
      lname: user.lname,
    });
  } catch (err) {
    next(err);
  }
});
app.post("/accounts/create", async (req, res) => {
  const existingAccount = await Account.findOne({
    email: req.body.email,
  });
  if (existingAccount) {
    return res.status(409).json({ message: "Email Already Exists" });
  } else {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
        return res.status(550).json({ error: err });
      } else {
        const account = new Account({
          fname: req.body.fname,
          lname: req.body.lname,
          dateofbirth: req.body.dateofbirth,
          email: req.body.email,
          password: hash,
        });
        const savedAccount = await account.save();
        res.json(savedAccount);
      }
    });
  }
});
app.post("/accounts/login", async (req, res) => {
  const existingAccount = await Account.findOne({
    email: req.body.email,
  }); // try to retrievve the user matching the supplies email
  if (!existingAccount) {
    //if the user doesn't exist
    return res.status(401).json({
      message: "Authorization Failed",
    }); // send back error to client and due to return, exit function
  } else {
    // otherwise if the user does exist
    bcrypt.compare(
      req.body.password,
      existingAccount.password,
      (err, result) => {
        // compare supplied password with the encrypted account
        if (err) {
          // if the comparison fails
          return res.status(401).json({
            message: "Authorization Failed",
          }); // send back error message and due to return, exit function
        } else {
          // otherwise if the comparison succeeds
          if (result) {
            //check if the result of the comparison is that the password is correct (result === true)
            // create json web token
            const lifespan = 1 * 60 * 60;
            const token = jwt.sign(
              {
                id: existingAccount._id,
                email: existingAccount.email,
              },
              "monkeyPuzzle",
              {
                expiresIn: lifespan,
              }
            ); //expressed in seconds
            res.cookie("jwt", token, {
              maxAge: lifespan * 1000,
              httpOnly: true,
            }); //Expressed in seconds
            return res.status(200).json({
              id: existingAccount._id,
              email: existingAccount.email,
              fname: existingAccount.fname,
              lname: existingAccount.lname,
            });
          } else {
            return res.status(401).json({
              message: "Authorization Failed",
            }); // send back error to client and due to return, exit function
          }
        }
      }
    );
  }
});

app.get("/accounts/logout", async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json({ message: "logged out " });
});

//  ######   #######  ##     ## ##     ## ######## ##    ## ########  ######
// ##    ## ##     ## ###   ### ###   ### ##       ###   ##    ##    ##    ##
// ##       ##     ## #### #### #### #### ##       ####  ##    ##    ##
// ##       ##     ## ## ### ## ## ### ## ######   ## ## ##    ##     ######
// ##       ##     ## ##     ## ##     ## ##       ##  ####    ##          ##
// ##    ## ##     ## ##     ## ##     ## ##       ##   ###    ##    ##    ##
//  ######   #######  ##     ## ##     ## ######## ##    ##    ##     ######

//Get All Comments - Alexis

app.get("/posts/:postId/comments", async (req, res) => {
  const post = await Post.findById(req.params.postId).populate(
    "author",
    "email fname lname"
  );
  res.status(200).json(post.comments);
});

//Get Specific Comment - Alexis

// app.get("/posts/:postId/comments/:commentId", async (req, res) => {
//   const post = await Post.findById(req.params.postId);
//   const comment = post.comments.id(req.params.commentId);
//   res.status(200).json(comment);
// });

//Delete Comments - Alexis

app.delete("/posts/:postId/comments/:commentId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  post.comments.pull(req.params.commentId);
  const savedPost = await post.save();
  res.status(200).send(savedPost);
});

//Post Comment - Alexis

app.post("/posts/:postId/comments", authUser, async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    post.comments.push({
      text: req.body.text,
      author: req.userId,
    });
    const savedPost = await post.save();
    res.status(200).send(savedPost);
  } catch (err) {
    next(err);
  }
});
