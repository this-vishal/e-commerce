const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce-vishal');

const db = mongoose.connection;

db.on('error' , (error)=>{
    console.log(error);
});

db.once('open' , ()=>{
    console.log('Database conection eshtablish Successfully............');
});


module.exports = mongoose;