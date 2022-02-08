import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const App = () => {
  return (
    <>
    <h1>Welcome</h1>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign up</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
