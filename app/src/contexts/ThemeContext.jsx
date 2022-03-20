import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const themes = {
  green: "#E3170A",
  red: "#E3170A",
};

export const useTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return [themes[theme], setTheme];
};

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("red");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
