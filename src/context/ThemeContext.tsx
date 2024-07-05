import React, { createContext, useState, useContext, ReactNode } from 'react';

type Theme = {
  background: string;
  text: string;
  primary: string;
  switchTrack: string;
  switchThumb: string;
};

type ThemeContextType = {
  isDarkTheme: boolean;
  theme: Theme;
  toggleTheme: () => void;
};

const darkTheme: Theme = {
  background: '#121212',
  text: '#ffffff',
  primary: '#1E90FF',
  switchTrack: '#767577',
  switchThumb: '#f5dd4b',
};

const lightTheme: Theme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#1E90FF',
  switchTrack: '#767577',
  switchThumb: '#f4f3f4',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
