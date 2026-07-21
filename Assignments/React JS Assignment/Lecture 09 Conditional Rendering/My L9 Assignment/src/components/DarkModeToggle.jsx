import React, { useState } from 'react';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc',
            color: isDarkMode ? '#f8fafc' : '#0f172a',
            fontFamily: 'sans-serif',
            maxWidth: '500px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            borderBottom: `2px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
            paddingBottom: '12px',
            margin: '0 0 20px 0',
            fontSize: '1.5rem'
        },
        statusBox: {
            backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
            border: `1px solid ${isDarkMode ? '#334155' : '#e2e8f0'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: '600'
        },
        button: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: isDarkMode ? '#f8fafc' : '#0f172a',
            color: isDarkMode ? '#0f172a' : '#ffffff',
            transition: 'all 0.2s ease'
        }
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 7: Dark Mode Toggle</h3>
            <div style={styles.statusBox}>
                {isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
            </div>
            <button
                style={styles.button}
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                Toggle Mode
            </button>
        </div>
    );
}

export default DarkModeToggle;