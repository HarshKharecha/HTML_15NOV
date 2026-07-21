import React, { useState } from 'react';

function LoginLogoutUI() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            maxWidth: '500px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 20px 0',
            fontSize: '1.5rem'
        },
        messageBox: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#475569',
            fontSize: '1.1rem',
            fontWeight: '600'
        },
        button: (isLoggedIn) => ({
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: isLoggedIn ? '#ef4444' : '#2563eb',
            color: '#ffffff',
            transition: 'all 0.2s ease'
        })
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 6: Login / Logout UI</h3>
            <div style={styles.messageBox}>
                {isLoggedIn ? "Welcome User" : "Please Login"}
            </div>
            <button
                style={styles.button(isLoggedIn)}
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    );
}

export default LoginLogoutUI;