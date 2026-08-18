import React from 'react';

const styles = {
    header: {
        backgroundColor: '#1e293b',
        color: '#ffffff',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    title: { margin: 0, fontSize: '1.5rem' },
    badge: {
        backgroundColor: '#3b82f6',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.875rem',
    },
};

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>🎓 Smart Student Management Dashboard</h1>
            <span style={styles.badge}>State Lifting Architecture</span>
        </header>
    );
}

export default Header;