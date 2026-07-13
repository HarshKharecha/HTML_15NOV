import React, { useState } from 'react'

function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div style={{
            padding: '20px',
            border: '1px solid #ccc',
            margin: '10px',
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#000'
        }}>
            <h3>Task 16: Theme Switcher</h3>
            <p>Current Theme: <strong>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</strong></p>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
        </div>
    )
}

export default ThemeSwitcher