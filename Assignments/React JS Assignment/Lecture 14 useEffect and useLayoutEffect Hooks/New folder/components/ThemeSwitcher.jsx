import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#121212';
    document.body.style.color = theme === 'light' ? '#000000' : '#ffffff';

    return () => {
      // Revert styles when unmounting
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [theme]);

  return (
    <div style={styles.container}>
      <h2>Task 14: Theme Switcher</h2>
      <p>Active Mode: {theme.toUpperCase()}</p>
      <button
        style={styles.button}
        onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #888',
    borderRadius: '8px',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export default ThemeSwitcher;