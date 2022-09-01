import React from "react";

const useDarkmode = (initialState) => {
  const [isDark, setIsDark] = React.useState(initialState);
  React.useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);
  React.useEffect(() => {
    const doc = document.documentElement;
    if (isDark) {
      doc.classList.add(`dark`);
    } else {
      doc.classList.remove(`dark`);
    }
  }, [isDark]);
  return [isDark, setIsDark];
};

export default useDarkmode;
