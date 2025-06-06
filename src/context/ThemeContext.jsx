import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  );
}