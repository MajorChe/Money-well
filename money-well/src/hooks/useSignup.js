import React, { useEffect, useState } from "react";
import { projectMoneyWellAuth } from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuthContext();
  const signup = async (email, password, name) => {
    setError(null);
    setIsPending(true);

    try {
      const response =
        await projectMoneyWellAuth.createUserWithEmailAndPassword(
          email,
          password
        );

      if (!response) {
        throw new Error("Could not sign up!!");
      }

      await response.user.updateProfile({ displayName: name });

      // dispatch login action type
      dispatch({ type: "LOGIN", payload: response.user });

      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  //used as a clean up function to avoid side effects for state unmounting
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { signup, error, isPending };
};
