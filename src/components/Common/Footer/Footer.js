import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../media/logo.png'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <div className = "footer mt-5 pt-5 text-white">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-4 ">
                        <img style={{ height:"80px"}} src={logo} alt="logo"/>
                    </div>
                    <div className = "col-md-4">
                        <h4>Usefull Links</h4>
                        <NavLink className="menu" to="/home">Home</NavLink> <br />
                        <NavLink className="menu" to="/aboutUs">About Us</NavLink> <br/>
                        <NavLink className="menu" to="/faq">FAQ</NavLink>   <br/>
                        <NavLink className="menu" to="/blog">Blog</NavLink>
                    </div>
                    <div className = "col-md-4">
                        <h4>Follow Us</h4>
                        <div>
                            <IconContext.Provider value={{color:"white", size:"2em"}}>
                                <FaFacebook style={{marginRight:"1em"}}/>
                                <FaGithub style={{marginRight:"1em"}}/>
                                <FaLinkedin style={{marginRight:"1em"}}/>
                                <FaTwitter style={{marginRight:"1em"}}/>
                                <FaYoutube style={{marginRight:"1em"}}/>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;