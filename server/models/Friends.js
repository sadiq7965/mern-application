// here we create Schema and module for Friends collection in pedro database
/// same code we can write in our main page i.e index.js but we sepretlly doing it here just bcz to cleanly mainage our code

const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
    domain:String,
    email:String,
    phone:String,
    checkbox:Boolean,
    // phone:{
    //     type:Number,
    //     require:true
    // }, 
});

const  FriendModel = mongoose.model('friends',FriendSchema);

module.exports = FriendModel