import React from "react";
import { Link } from "react-router-dom";
import { authReducer } from "../context/AccountContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import "./Navbar.css"

const Navbar = () => {
  const {logout} = useLogout();
  const {user} = useAuthContext(authReducer)
  return (
    <>
      <nav>
        <h1><Link to="/">MoneyWell</Link> - Your personal wallet</h1>
        <div className="right-nav">
        {!user && (
          <>
            <Link to="/login"><button className="btn">Login</button></Link>
            <Link to={"/signup"}><button className="btn btn-1">Signup</button></Link>
          </>
        )}
        {user && (
          <div className="logged-nav">
            <h3>Hello, {user.displayName}</h3>
            <button className="btn btn-1" onClick={logout}>Logout</button>
          </div>
        )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
