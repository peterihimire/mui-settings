import { createContext, useState } from "react";

const themes = {
  dark: {
    background: "#212121",
    color: "#f5f5ff",
  },
  dark_light: {
    background: "#212121",
    color: "#F5F5FF",
  },
  light: {
    background: "#212121",
    color: "#F5F5F",
  },
  light_dark: {
    background: "#F1F1F1",
    color: "black",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const theme = isDark ? themes.dark : themes.light;

  const toggleTheme = () => {
      // localStorage.setItem("isDark", JSON.stringify(!isDark))
    setIsDark(isDark);
    // setIsDark(!isDark);
  };

  // useEffect(() => {
  //     const isDark = localStorage.getItem("isDark") === "true"
  //     setIsDark(!isDark)
  // }, [])

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
