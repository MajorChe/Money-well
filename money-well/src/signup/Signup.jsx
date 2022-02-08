import React, { useContext, useState } from "react";
import { AccountContext, AccountContextProvider, authReducer } from "../context/AccountContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSignup } from "../hooks/useSignup";
import styles from "./Signup.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState(false);

  // To get the logged user object
  // const {user} = useAuthContext(authReducer);

  const { signup, error, isPending } = useSignup();
  
  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassError(true);
    } else {
      setPassError(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      signup(email, password);
    }
  };
  return (
    <div className={styles.main}>
      <h1>Sign up</h1>
      <form className="login-form" onSubmit={handleSignup}>
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
