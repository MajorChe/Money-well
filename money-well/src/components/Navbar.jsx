import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <h1><Link to="/">MoneyWell</Link></h1>
        <div className="right-nav">
        <Link to="/login"><button className="btn">Login</button></Link>
        <Link to={"/signup"}><button className="btn btn-1">Signup</button></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
