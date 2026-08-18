import React from 'react';

const styles = {
    header: {
        backgroundColor: '#051b3f',
        color: '#ffffff',
        padding: '1.25rem 2rem',
        boxShadow: '0 4px 6px -1px rgba(0, 5, 70, 0.1)',
    },
    title: {
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: '700',
    },
    subtitle: {
        margin: '0.25rem 0 0 0',
        fontSize: '0.875rem',
        color: '#f0f0f0',
    },
};

function Header() {

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Smart Product Analytics Dashboard</h1>
            <p style={styles.subtitle}>Performance Optimization with useMemo, useCallback & React.memo</p>
        </header>
    );
}

export default Header;