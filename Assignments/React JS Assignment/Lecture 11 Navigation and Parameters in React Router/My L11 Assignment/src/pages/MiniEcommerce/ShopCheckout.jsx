import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopCheckout() {
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
            margin: '0 0 20px 0',
            color: '#1e293b',
            fontSize: '1.5rem',
            fontWeight: '700'
        },
        input: {
            width: '100%',
            padding: '12px 14px',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            fontSize: '0.95rem',
            boxSizing: 'border-box',
            marginBottom: '20px',
            outline: 'none'
        },
        button: {
            width: '100%',
            padding: '12px 16px',
            backgroundColor: '#15803d',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            boxShadow: '0 2px 4px rgba(21, 128, 61, 0.2)'
        }
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        navigate('/more/ecommerce/success');
    };

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <h2 style={styles.title}>Checkout Page</h2>
                <form onSubmit={handleCheckout}>
                    <input 
                        type="text" 
                        placeholder="Shipping Address" 
                        required 
                        style={styles.input} 
                    />
                    <button type="submit" style={styles.button}>Complete Order</button>
                </form>
            </div>
        </div>
    );
}

export default ShopCheckout;