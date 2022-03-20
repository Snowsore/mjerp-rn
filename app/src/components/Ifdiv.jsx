import { useContext, createContext } from "react";

const ToggleContext = createContext();

const Ifdiv = (props) => {
  return (
    <ToggleContext.Provider value={props.value}>
      {props.children}
    </ToggleContext.Provider>
  );
};

const True = (props) => {
  const context = useContext(ToggleContext);
  return context ? props.children : null;
};

const False = (props) => {
  const context = useContext(ToggleContext);
  return context ? null : props.children;
};

Ifdiv.True = True;
Ifdiv.False = False;

export default Ifdiv;
