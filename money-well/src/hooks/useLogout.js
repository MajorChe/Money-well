import { useEffect, useState } from "react";
import { projectMoneyWellAuth } from "../firebase/Config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const { dispatch } = useAuthContext();
  const logout = async () => {
    setError(null);
    setIsPending(true);
    try {
      await projectMoneyWellAuth.signOut();
      dispatch({ type: "LOGOUT" });
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
  useEffect(() => {
    return () => setIsCancelled(true);
  },[]);
  return { logout, error, isPending };
};
