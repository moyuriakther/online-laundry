import React from "react";
import { FaFacebook, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
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
        <NavLink to="/home" className="menu"><img style={{height:"80px"}} src={logo}/></NavLink>
      </div>
      <div className="address">
          <h4>Mirput 1, Dhaka </h4>
      </div>
      <div className="justify-content-center">
          <h6>017XXXXXXXX</h6>
          <h6>najmulcse2@gmail.com</h6>
      </div>
    </div>
  );
};

export default TopBar;
