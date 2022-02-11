import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import styles from "./home/Home.module.css";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const App = () => {
  const { user, loggedIn } = useAuthContext();
  const PrivateRoutes = () => {
    return user ? <Outlet /> : <Navigate to={"/login"} />;
  };

  return (
    <>
      {loggedIn && (
        <>
          <Navbar />
          <Routes>
            {!user && <Route path="/login" element={<Login />} />}
            {!user && <Route path="/signup" element={<Signup />} />}
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          <footer className={styles.footer}>
            <p>
              Made with React & Firebase by - <u>Charit</u>
            </p>
            <p>
              S-Code:{" "}
              <a href="https://github.com/MajorChe/Money-well/tree/main/money-well/src">
                *%*
              </a>
            </p>
          </footer>
        </>
      )}
    </>
  );
};

export default App;
