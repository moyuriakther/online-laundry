import React from "react";
// import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdPhoneEnabled, MdEmail } from "react-icons/md";
import { IconContext } from 'react-icons';
import './TopBar.css';
import { NavLink} from 'react-router-dom';
import logo from '../../../media/logo.png'
const TopBar = () => {
  return (
    <div className="topBar container">
      <div className="row">
        <div className="col-md-3  col-sm-3 col-xl-3 col-lg-3">
        <div className="icons">
        <NavLink to="/home" className="menu ml-2"><img style={{height:"70px"}} src={logo}/></NavLink>
      </div>
        </div>
        <div className="address email-phone-address  col-md-7 col-sm-6 col-xl-7 col-lg-7">
            <div className="d-flex">
              <p>Mirput 1, Dhaka </p>
              <IconContext.Provider value={{color:"#c36341"}}>
                <p><MdPhoneEnabled/> +88 01700000000</p> <p><MdEmail/> najmulcse2@gmail.com</p>
              </IconContext.Provider>
          </div>
        </div>
        <div className="login-registration col-md-2 col-lg-2 col-sm-3 col-xl-2">
          <div className="login-area d-flex align-items-center">
            <NavLink className="login-register text-black" to="/login">Login / Register</NavLink>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default TopBar;
