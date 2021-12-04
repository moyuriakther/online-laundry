import React from 'react';
import Navigation from '../Navbar/Navigation';
import TopBar from '../TopBar/TopBar';

const Header = () => {
    return (
        <div className="header-area">
            <TopBar/>
            <Navigation/>
        </div>
    );
};

export default Header;