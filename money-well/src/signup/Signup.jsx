import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import styles from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState(false);

  const { signup, error, isPending } = useSignup();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassError(true);
    } else {
      setPassError(false);
      signup(email, password, name);
    }
  };
  return (
    <div className={styles.main}>
      <form className={styles.loginForm} onSubmit={handleSignup}>
        <h1>Sign up</h1>
        {error && (
          <p className={styles.error}>
            {error}
            <br />
            <br />
          </p>
        )}
        {passError && (
          <p className={styles.error}>
            Passwords do not match <br />
            <br />
          </p>
        )}
        <label>Email:</label>
        <input
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          onClick={() => setPassError(false)}
        />
        <label>Name:</label>
        <input
          type={"text"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label>Password:</label>
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <label>Confirm Password:</label>
        <input
          type={"password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
        {!isPending && <button className="btn btn-2">Signup</button>}
        {isPending && (
          <button className="btn btn-2" disabled>
            Loading
          </button>
        )}
      </form>
    </div>
  );
};

export default Signup;
