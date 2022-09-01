import React from "react";

import NavBar from "features/NavBar/NavBar";
import useDarkmode from "hooks/useDarkmode";

import "../styles/globals.css";

export const ThemeContext = React.createContext();
let initialState = false;
if (typeof localStorage !== "undefined" && localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
  initialState = true;
}

function MyApp({ Component, pageProps }) {
  const contextValue = useDarkmode(initialState);
  return (
    <ThemeContext.Provider value={contextValue}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
