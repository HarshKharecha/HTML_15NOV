import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopCart() {
    const navigate = useNavigate();

    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            padding: '30px',
            backgroundColor: '#f8fafc',
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '30px',
            maxWidth: '400px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        title: {
            margin: '0 0 8px 0',
            color: '#1e293b',
            fontSize: '1.5rem',
            fontWeight: '700'
        },
        description: {
            margin: '0 0 25px 0',
            color: '#64748b',
            fontSize: '0.95rem'
        },
        buttonPrimary: {
            width: '100%',
            padding: '12px 16px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            marginBottom: '12px'
        },
        buttonSecondary: {
            width: '100%',
            padding: '12px 16px',
            backgroundColor: '#e2e8f0',
            color: '#1e293b',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem'
        }
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <h2 style={styles.title}>Shopping Cart</h2>
                <p style={styles.description}>Items selected in your cart.</p>
                <button style={styles.buttonPrimary} onClick={() => navigate('/more/ecommerce/checkout')}>
                    Proceed to Checkout
                </button>
                <button style={styles.buttonSecondary} onClick={() => navigate('/more/ecommerce/products')}>
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

export default ShopCart;