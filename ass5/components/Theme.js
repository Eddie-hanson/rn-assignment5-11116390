// ThemeContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const loadThemeSetting = async () => {
      const savedTheme = await AsyncStorage.getItem("theme");
      setIsDarkTheme(savedTheme === "dark");
    };
    loadThemeSetting();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDarkTheme ? "dark" : "light";
    await AsyncStorage.setItem("theme", newTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
