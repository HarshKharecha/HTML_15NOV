import React from 'react';

function Footer({ theme }) {
    const isDark = theme === 'dark';
    const currentYear = new Date().getFullYear();
    const styles = {
        footer: {
            padding: '1rem',
            textAlign: 'center',
            backgroundColor: isDark ? '#1f2937' : '#ffffff',
            color: isDark ? '#e2e8f0' : '#0f172a',
            marginTop: 'auto',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            borderTop: isDark ? '1px solid #1f2937' : '1px solid #e2e8f0',
            boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.02)',
        },
    };

    return (
        <footer style={styles.footer}>
            <p style={{ margin: 0 }}>© {currentYear} <strong style={{ color: isDark ? '#ffffff' : '#2563eb' }}>Smart Employee Management Dashboard</strong>. All rights reserved.</p>
        </footer>
    );
}

export default Footer;