import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { type Theme } from "../types/theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved || "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
