import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="main">
      <form className="login-form" onSubmit={handleLogin}>
      <h1>Login</h1>
      {error && (
        <p className="error">
          {error}
          <br />
          <br />
        </p>
      )}
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
        {!isPending && <button className="btn btn-2">Login</button>}
        {isPending && (
          <button className="btn btn-2" disabled>
            Loading
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
