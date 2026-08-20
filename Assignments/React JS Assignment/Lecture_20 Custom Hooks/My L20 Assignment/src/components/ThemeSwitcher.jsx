import React from 'react';

function ThemeSwitcher({ theme, setTheme }) {
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const styles = {
        button: {
            padding: '7px',
            cursor: 'pointer',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: theme === 'light' ? '#ffffff' : '#111827',
            fontWeight: 'bold',
            fontSize: '25px',
            width: '51px',
            borderRadius: '100%',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            boxSizing: 'border-box'
        },
    };

    return (
        <button style={styles.button} onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}

export default ThemeSwitcher;