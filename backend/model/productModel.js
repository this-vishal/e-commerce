const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    discount:{
        type:String,
        required:true,
    },
    image:[{
        type:String,
        required:true,
    }
]
    
});

const Product = new mongoose.model('product',productSchema);

module.exports =Product;