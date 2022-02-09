import { createContext, useEffect, useReducer } from "react";
import { projectMoneyWellAuth } from "../firebase/Config";

export const AccountContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return { ...state, user: action.payload, loggedIn: true };
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AccountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loggedIn: false,
  });

  useEffect(() => {
    const unsub = projectMoneyWellAuth.onAuthStateChanged((user) => {
      dispatch({ type: "LOGGEDIN", payload: user });
      unsub(); // this will make this function run only once and not when there is a state change
    });
  }, []);

  console.log("account context state", state);
  return (
    <AccountContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AccountContext.Provider>
  );
};
