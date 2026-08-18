import React from 'react';

const styles = {
    footer: {
        backgroundColor: '#051b3f',
        color: '#f0f0f0',
        textAlign: 'center',
        padding: '1rem',
        fontSize: '0.875rem',
        marginTop: 'auto',
    },
    text: {
        margin: 0,
    },
};

function Footer() {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>© 2026 Smart Product Analytics Dashboard. React Optimization Practice.</p>
        </footer>
    );
}

export default Footer;