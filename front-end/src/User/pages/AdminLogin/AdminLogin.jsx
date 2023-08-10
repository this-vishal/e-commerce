import React, { useEffect, useState } from "react";
import './AdminLogin.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useNavigate ,useLocation} from "react-router-dom";


function AdminLogin() {
const location = useLocation()

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
   async function buttonHandler(e){


       e.preventDefault();
       const data = {
        email:email,
        password :password,
       }


        await axios.post('http://localhost:8080/api/v1/admin-login',
       
        data
       )
      .then(function (response) {
        console.log(response);
        const token = response.data.authToken;
        const authName = response.data.name;
        const isLogin = response.data.isLogin;

        localStorage.setItem("token",token);
        localStorage.setItem('authName' , authName);
        localStorage.setItem('isLogin' ,isLogin );
      
       navigate('/admin/product-details',{state:{name:"rajneesh"}});
        

      })
      .catch(function (error) {
        console.log(error);
      });
      
    //   useEffect(()=>{
    //     if(isLogin){
    //         navigate('/admin/product-details');
    //       }
    //   })


    }


    return (
        <><Navbar />
            <div className="adminform-container">
                <div className="adminlogin-form ">
                    <h2>Admin Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input name="admin-mail"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name="admin-password" onChange={(event) => {
                                setPassword(event.target.value);
                            }} type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button onClick={buttonHandler}
                            className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
            <Footer/>
        </>
    )
};

export default AdminLogin;