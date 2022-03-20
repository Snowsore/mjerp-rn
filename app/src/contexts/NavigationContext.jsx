//Context.js

import { useState, createContext, useContext } from "react";

export const NavigationContext = createContext();

export function useNavigation() {
  const [navigation, setNavigation] = useContext(NavigationContext);
  return [navigation, setNavigation];
}

export function NavigationProvider(props) {
  const [navigation, setNavigation] = useState();
  return (
    <NavigationContext.Provider value={[navigation, setNavigation]}>
      {props.children}
    </NavigationContext.Provider>
  );
}
