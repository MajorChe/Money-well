import React, { useState } from "react";
import styles from "./Signup.module.css"
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password,confirmPassword);
  };
  return (
    <div className={styles.main}>
      <h1>Sign up</h1>
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
        <label>Confirm Password:</label>
        <input
          type={"password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <button className="btn btn-2">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
