import { createContext, useReducer } from "react";

export const AccountContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
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
  });
  console.log("account context state", state);
  return (
    <AccountContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AccountContext.Provider>
  );
};
