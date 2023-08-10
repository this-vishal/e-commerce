import React, { useState } from "react";
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import axios from "axios";
import Footer from "../../components/Footer/Footer";

function Login() {


    // take input data  usisng useState

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   
    const buttonHandler = async(e) => {

        e.preventDefault() ;

        console.log(email , password);
        const data = {
            email :email,
            password:password,
        }
       
      

        axios({
            method: 'post',
            url: 'http://localhost:8080/api/v1/login-user',
            data:data,
          });


        // var result =   await fetch('http://localhost:8080/api/v1/login-user',{
        //     method:"post",
        //     header:{
        //         "Content-Type": "application/json"
        //     },
        //     body:JSON.stringify(data),
        // });
        
        // console.log(result);
        
    }


    return (
        <> <Navbar />
            <div className="form-container">
                <div className="login-form ">

                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button
                            onClick={
                                buttonHandler
                            }
                            type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Login;