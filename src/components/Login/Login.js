import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
       <div className="container my-5 d-flex justify-content-center">
           <div className="login">
                <h1>Login</h1>
                    <input type="text" placeholder="Enter Your Email"/> <br />
                    <input type="password" placeholder="Enter Your Password"/> < br />
                   <label className="save-password-label d-flex justify-content-start align-items-center"> 
                        <input type="checkbox" id="remember-password" name="remember-password" value="remember-password"/>
                        <p className="remember-password">Remember password</p>
                   </label>
                    <button className="btn-main login-btn">Login</button> <br />
                    <div>Or</div>
                    <NavLink to="/register" className="px-0">
                        <p className="create-new-account">Create New Account</p>
                    </NavLink>
            </div>
       </div>
    );
};

export default Login;