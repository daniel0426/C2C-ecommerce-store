const mongoose = require('mongoose');
const AccountSchema = mongoose.Schema({
    fname: {
        type: String, 
        required: true},

    lname: {
        type: String,
        required: true},

    dateofbirth: {
        type: String,
        required: true},

    email: {
        type: String,
        required: true},

    password: {
        type:String,
        required: true}
}, 

{timestamps: true}
);

module.exports = mongoose.model("account", AccountSchema);
