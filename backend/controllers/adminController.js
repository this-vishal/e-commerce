require('dotenv').config();

var jwt = require('jsonwebtoken');

const key    = process.env.PUBLIC_KEY;


const Admin = require('../model/adminModel');



const adminLogin = async (req,res)=>{


    const {email , password} = req.body;

    console.log(email);
      try{

            const result =  await Admin.findOne({email :email,password:password});

            if(result) {



                console.log(result.name);
                var authToken = jwt.sign({ name: result.name }, key);
                console.log(authToken);
                res.send({ authToken , name: result.name , 'isLogin' :true});




                // res.send(result);

            }
            else{
                console.log('Invalid mail or password!!');
                res.send({msg:'Invalid mail or Password' }).status(404,'Access Denied');
            }

      }
      catch(exception){
        console.log(exception);
      }

}


module.exports = adminLogin;
