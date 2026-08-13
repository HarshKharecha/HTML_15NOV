import React from 'react';

function Header() {
    const styles = {
        header: {
            backgroundColor: '#12295a',
            color: '#ffffff',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #0e2559',
        },
        title: {
            margin: 0,
            fontSize: '20px',
        },
        badge: {
            backgroundColor: '#0284c7',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold',
        },
    };

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>⚡ Smart Task Dashboard</h1>
            <span style={styles.badge}>Embedded UI Enabled</span>
        </header>
    );
}

export default Header;