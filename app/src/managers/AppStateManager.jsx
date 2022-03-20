import { useState, useEffect, useRef } from "react";
import { AppState } from "react-native";

const activeTaskList = [];
const inactiveTaskList = [];

export function useActive(cb) {
  activeTaskList.push(cb);
}

export function useIncctive(cb) {
  inactiveTaskList.push(cb);
}

export function AppStateManager(props) {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        activeTaskList.map((task) => task());
      } else {
        inactiveTaskList.map((task) => task());
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <>{props.children}</>;
}
