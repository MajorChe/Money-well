import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="main">
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="btn btn-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
