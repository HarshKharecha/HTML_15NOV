import React from 'react';

function Footer() {
    const styles = {
        footer: {
            textAlign: 'center',
            padding: '12px',
            backgroundColor: '#12295a',
            color: '#f0f0f0',
            fontSize: '13px',
            borderTop: '1px solid #0e2559',
        },
        text: {
            margin: 0,
        },
    };

    return (
        <footer style={styles.footer}>
            <p style={styles.text}>&copy; {new Date().getFullYear()} Smart Task Management Dashboard - by Harsh S Kharecha</p>
        </footer>
    );
}

export default Footer;