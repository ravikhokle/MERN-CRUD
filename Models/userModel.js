const mongoose = require("mongoose");

//Creating Schema
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:Number
    }
},{
    timestamps:true
})

//Creating Model

const User = mongoose.model('User', UserSchema)
module.exports = User;
