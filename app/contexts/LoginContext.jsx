//Context.js

import { useState, createContext, useContext } from "react";

export const LoginContext = createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export function LoginProvider(props) {
  const [login, setLogin] = useState({});
  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {props.children}
    </LoginContext.Provider>
  );
}
