import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const styles = {
    continar: {
      padding: '20px',
      margin: '10px 0',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      backgroundColor: darkMode ? '#0f172a' : '#ffffff',
      color: darkMode ? '#ffffff' : '#000000',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: darkMode ? '#38bdf8' : '#0f172a',
      color: darkMode ? '#000' : '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer'
    }
  };

  // Task 14: Toggle background style on document body
  useEffect(() => {
    setMounted(true);
    console.log(`Theme switched to: ${darkMode ? 'Dark' : 'Light'}`);
  }, [darkMode]);

  return (
    <div style={styles.continar}>
      <h3>Task 14: Theme Switcher</h3>
      <button
        style={styles.button}
        onClick={() => setDarkMode(!darkMode)}
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;