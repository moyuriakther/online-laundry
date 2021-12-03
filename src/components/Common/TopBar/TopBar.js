import React from "react";
// import { FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdPhoneEnabled, MdEmail } from "react-icons/md";
import { IconContext } from 'react-icons';
import './TopBar.css';
import { NavLink} from 'react-router-dom';
import logo from '../../../media/logo.png'
const TopBar = () => {
  return (
    <div className="topBar d-flex justify-content-between align-items-center container">
      <div className="icons justify-content-between">
        {/* <Link to="/www.facebook.com"><FaFacebook /></Link>
        <a href="www.youtube.com" target="_blank"><FaYoutube /></a>        
        <FaMapMarkerAlt /> */}
        <NavLink to="/home" className="menu ml-2"><img style={{height:"80px"}} src={logo}/></NavLink>
      </div>
      <div className="address">
          <p>Mirput 1, Dhaka </p>
      </div>
      <div className="email-phone-address d-flex justify-content-center align-items-center">
      <IconContext.Provider value={{color:"#c36341"}}>
          <p><MdPhoneEnabled/> +88 01700000000</p> <p><MdEmail/> najmulcse2@gmail.com</p>
      </IconContext.Provider>
      </div>
    </div>
  );
};

export default TopBar;
