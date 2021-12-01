import "./App.css";
import Home from "./components/Home/Home";
import React, { createContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Common/Footer/Footer";
import Faq from "./components/Faq/Faq";
import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blog/Blog";
import LundryService from "./components/Services/LundryService/LaundryServices";

// export const UserContext = createContext();
function App() {
  // const [loggedInUser, setLoggedInUser] = useState({});
  return (
    // <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/laundryService" element={<LundryService/>} />
      </Routes>
      <Footer/>
       {/* </UserContext.Provider>   */}
    </>
  );
}

export default App;
