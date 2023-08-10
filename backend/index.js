require('dotenv').config();
const cors = require('cors');
const userLogin = require('./controllers/userController')
const PORT= process.env.PORT || 5000;
const express = require('express');
const app = express();
require('./db/config');
app.use(cors());
app.use(express.json());
const userRouter = require('./routes/userRoutes');
const sellerRouter = require('./routes/sellerRoutes');
const adminRouter =  require('./routes/adminRoutes');

const productRouter = require('./routes/productRoutes'); 

app.use("/api/v1", userRouter);
app.use("/api/v1", sellerRouter);
app.use("/api/v1", adminRouter);
app.use('/api/v1' , productRouter);




app.listen(PORT, (error)=>{
    error?console.log(error):console.log(`Server is running on port ${PORT}`);
})