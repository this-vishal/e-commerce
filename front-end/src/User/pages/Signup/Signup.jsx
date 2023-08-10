import React, { useState } from "react";
import './Signup.css';
import axios from "axios";
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
function Signup() {

    const [data, setData] = useState({

        username: "",
        email: "",
        password: "",
    })

    function handleInput(e) {

        const newData = { ...data };

        newData[e.target.id] = e.target.value;
        setData(newData);

    }

    const buttonHandler = async(e) => {
        e.preventDefault();

        console.log(data);

        await axios({
            method: 'post',
            url: 'http://localhost:8080/api/v1/signup-user',
            data:data,
          });

    }

    return (
        <>
         <Navbar />
            <div className="form-container">
                <div className="signup-form ">

                    <form>
                        <div className="mb-3">
                            <label for="username" className="form-label">User Name</label>
                            <input
                                onChange={(e) => {
                                    handleInput(e);
                                }}
                                type="text" className="form-control" id="username" />

                        </div>


                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input
                                onChange={(e) => {
                                    handleInput(e);
                                }}
                                type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="email-text" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input
                                onChange={(e) => {
                                    handleInput(e);
                                }}
                                type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button
                            onClick={buttonHandler}
                            type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Signup;