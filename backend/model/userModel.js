const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required,
    },
    email:{
        type:String,
        required,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }

});

const User = new mongoose.model('user' , userSchema);

module.exports = User;