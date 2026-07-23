import React from 'react';

function Contact() {
    const styles = {
        mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' },
        heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 16px 0', fontSize: '1.5rem' }
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Contact Page</h3>
            <p style={{ color: '#475569' }}>Reach out to us anytime via support@example.com.</p>
        </div>
    );
}

export default Contact;