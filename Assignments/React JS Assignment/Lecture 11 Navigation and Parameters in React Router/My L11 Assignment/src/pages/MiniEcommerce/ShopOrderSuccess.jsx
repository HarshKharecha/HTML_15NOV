import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopOrderSuccess() {
    const navigate = useNavigate();

    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            padding: '30px',
            backgroundColor: '#f8fafc',
            textAlign: 'center'
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '40px',
            maxWidth: '450px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        title: {
            margin: '0 0 10px 0',
            color: '#15803d',
            fontSize: '1.8rem',
            fontWeight: '700'
        },
        description: {
            margin: '0 0 25px 0',
            color: '#64748b',
            fontSize: '1rem',
            lineHeight: '1.5'
        },
        button: {
            padding: '12px 24px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)'
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <h2 style={styles.title}>Order Success!</h2>
                <p style={styles.description}>Thank you for your purchase. Your order has been placed successfully.</p>
                <button style={styles.button} onClick={() => navigate('/more/ecommerce/home')}>
                    Back to E-Commerce Home
                </button>
            </div>
        </div>
    );
}

export default ShopOrderSuccess;