import "./App.css";
import Home from "./components/Home/Home";
import React, { createContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Common/Header/Header";

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
      </Routes>
       {/* </UserContext.Provider>   */}
    </>
  );
}

export default App;
