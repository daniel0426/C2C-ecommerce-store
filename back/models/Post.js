const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    price :{
        type: Number,
        required: true
    },
    condition: {
        type:[],
        required:true
    },
    size : {
        type: String, 
        required:true
    },
    location : {
        type:[],
        required:true
    },
    paymentType : {
        type: [],
        required: true
    },
    shippingOption : {
        type: [],
        required : true
    },
},{timestamps : true})

const Post = mongoose.model('Post', PostSchema);

<<<<<<< HEAD
module.exports = Post;
=======
module.exports = Post;
>>>>>>> 2f2f50c94809700ce5d4272a794368f8aa4e208c
