import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  // Task 14: Toggle background style on document body
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#0f172a' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [darkMode]);

  return (
    <div style={{ padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
      <h3>Task 14: Theme Switcher</h3>
      <button 
        style={{ padding: '8px 16px', backgroundColor: darkMode ? '#38bdf8' : '#0f172a', color: darkMode ? '#000' : '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        onClick={() => setDarkMode(!darkMode)}
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;