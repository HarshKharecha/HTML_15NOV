import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeStyles = {
    light: {
      bgPrimary: '#f8fafc',
      bgSecondary: '#ffffff',
      textPrimary: '#0f172a',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      accent: '#2563eb',
      cardBg: '#ffffff',
    },
    dark: {
      bgPrimary: '#0f172a',
      bgSecondary: '#1e293b',
      textPrimary: '#f8fafc',
      textSecondary: '#94a3b8',
      border: '#334155',
      accent: '#3b82f6',
      cardBg: '#1e293b',
    },
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, colors: themeStyles[theme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;