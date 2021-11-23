import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// import { UserContext } from '../../App';
import logo from '../../../media/logo.png'
import './Navbar.css';

const Navbar = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <div className="header nav container align-items-center">
               {/* <div>
                   <h3 ><NavLink to="/home" className="menu"><img style={{height:"80px"}} src={logo}/></NavLink></h3>
               </div> */}
           <div className="header-link justify-content-between">
               <div>
                   <NavLink className="menu" to="/home">Home</NavLink>
               </div>
               <div>
                   <NavLink className="menu" to="/orders">Orders</NavLink>
               </div>
               <div>
                   <NavLink className="menu" to="/admin">Admin</NavLink>
               </div>
               <div>
                   <NavLink className="menu" to="/deals">contact</NavLink>
               </div>
            </div>
               <div style = {{color:'tomato'}}>
                   {/* {loggedInUser.issSignedIn ? loggedInUser.name : */}
                    <NavLink className="menu" to="/login">Login / Signup</NavLink>
               </div>
           
       </div>
        </div>
    );
};

export default Navbar;