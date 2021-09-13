const express = require('express');
const mongoose = require('mongoose');
const Post = require('./models/Post');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const DB = "mongodb+srv://daniel0426:wjdgudwls12!@cluster0.4kcct.mongodb.net/ecommerce?retryWrites=true&w=majority";
const PORT = 4000;

mongoose.connect(
    DB, 
    {useNewUrlParser:true, useUnifiedTopology:true}, 
    ()=> {
    console.log('connected to DB')

    app.listen(PORT, ()=> {
        console.log("listening on port 4000")
    })
})



app.post('/posts', async (req, res)=> {
    const post = new Post({
        title: req.body.title,
        price: req.body.post,
        condition: req.body.condition,
        size:req.body.size,
        location: req.body.location,
        paymentType: req.body.paymentType,
        shippingOption : req.body.shippingOption
    });
    const savedPost = await post.save();
    res.json(savedPost);
})