import React, { useState } from "react";
import { projectMoneyWellAuth } from "../firebase/Config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const response =
        await projectMoneyWellAuth.createUserWithEmailAndPassword(
          email,
          password
        );

      console.log(response.user);

      if (!response) {
        throw new Error("Could not sign up!!");
      }
      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };
  return { signup, error, isPending };
};
