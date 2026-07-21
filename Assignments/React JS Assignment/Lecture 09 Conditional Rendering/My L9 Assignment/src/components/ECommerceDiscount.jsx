import React from 'react';

function ECommerceDiscount() {
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
        badge: {
            display: 'inline-block',
            backgroundColor: '#ef4444',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '20px',
            fontWeight: '800',
            fontSize: '0.9rem',
            letterSpacing: '0.5px'
        }
    };

    const hasDiscount = true;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 17: Discount Badge</h3>
            {hasDiscount && (
                <div style={styles.badge}>
                     30% OFF
                </div>
            )}
        </div>
    );
}

export default ECommerceDiscount;