const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zip:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    }
});

const Seller = new mongoose.model('seller',sellerSchema);

module.exports = Seller;