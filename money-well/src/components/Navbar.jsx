import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <h1><Link to="/">MoneyWell</Link></h1>
        <Link to="/login"><a className="btn btn-1">Login</a></Link>
        <Link to={"/signup"}><a className="btn btn-1">Signup</a></Link>
      </nav>
    </>
  );
};

export default Navbar;
