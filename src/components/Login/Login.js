import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
       <div className="container my-5 d-flex justify-content-center">
           <div className="login">
                <h1>Login</h1>
                    <input type="text" placeholder="Enter Your Email"/> <br />
                    <input type="password" placeholder="Enter Your Password"/> < br />
                   <div className=""> 
                        <input type="checkbox" id="remember-password" name="remember-password" value="remember-password"/>
                        <label for="remember-password">Remember password</label>
                   </div>
                    <button className="btn-main login-btn">Login</button> <br />
                    <div>Or</div>
                    <NavLink to="/register" className="px-1">
                        <button className="btn-main register-btn">Register</button>
                    </NavLink>
                    <div>Or</div>
                    {/* <div className="d-flex justify-content-between"> */}
                    <button className="btn-main social-google-login"> <span> <FcGoogle/> </span> Continue With Google</button>
                    {/* <div>Or</div> */}
                    <button className="btn-main social-fb-login"><span><FaFacebookSquare/></span>  Continue With Facebook</button>
                    {/* </div> */}
            </div>
       </div>
    );
};

export default Login;