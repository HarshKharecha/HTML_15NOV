import React from 'react';

const styles = {
    footer: {
        backgroundColor: '#1e293b',
        color: '#94a3b8',
        textAlign: 'center',
        padding: '1rem',
        fontSize: '0.875rem',
    },
    text: { margin: 0 },
};

function Footer() {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>&copy; {new Date().getFullYear()} Smart Student Management Dashboard - by Harsh S Kharecha</p>
        </footer>
    );
}

export default Footer;