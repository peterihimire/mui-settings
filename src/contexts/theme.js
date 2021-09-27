import { createContext, useEffect, useState } from "react";

const themes = {
  dark: {
    background: "#181818",
    color: "white",
  },
  dark_light: {
    background: "#212121",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
  },
  light_dark: {
    background: "#F1F1F1",
    color: "black",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? themes.dark : themes.light;

  const toggleTheme = () => {
      localStorage.setItem("isDark", JSON.stringify(!isDark))
    setIsDark(!isDark);
  };

  useEffect(() => {
      const isDark = localStorage.getItem("isDark") === "true"
      setIsDark(isDark)
  }, [])

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
