import React from 'react';

function ShoppingCartStatus() {
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
        displayBox: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            color: '#334155',
            fontWeight: '600'
        }
    };

    const cartItems = 3;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 9: Shopping Cart Status</h3>
            <div style={styles.displayBox}>
                {cartItems > 0 ? "Items Available" : "Cart is Empty"}
            </div>
        </div>
    );
}

export default ShoppingCartStatus;