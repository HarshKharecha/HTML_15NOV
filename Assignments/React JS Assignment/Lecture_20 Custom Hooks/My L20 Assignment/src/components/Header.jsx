import React from 'react';

function Header({ theme }) {
    const isDark = theme === 'dark';
    const styles = {
        header: {
            padding: '1rem 2rem',
            color: '#2563eb',
            backgroundColor: isDark ? '#1f2937' : '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            fontFamily: 'sans-serif',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        },
        title: { margin: 0, fontSize: '1.5rem' },
    };

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>🎓 Smart Employee Dashboard</h1>
        </header>
    );
}

export default Header;