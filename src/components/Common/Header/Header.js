import React from 'react';
import Nav from '../Navbar/Nav';
import Navbar from '../Navbar/Navbar';
import TopBar from '../TopBar/TopBar';

const Header = () => {
    return (
        <div >
            <TopBar/>
            {/* <Nav/> */}
            <Navbar/>
        </div>
    );
};

export default Header;