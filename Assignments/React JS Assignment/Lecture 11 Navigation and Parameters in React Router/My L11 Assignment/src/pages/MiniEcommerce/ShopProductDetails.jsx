import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ShopProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const validProducts = ['prod-1', 'prod-2'];

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
        imageWrapper: {
            width: '100%',
            height: '180px',
            backgroundColor: '#f1f5f9',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            overflow: 'hidden'
        },
        image: {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
        },
        title: {
            fontSize: '1.4rem',
            fontWeight: '700',
            color: '#1e293b',
            margin: '0 0 10px 0'
        },
        price: {
            fontSize: '1.2rem',
            fontWeight: '700',
            color: '#2563eb',
            margin: '0 0 20px 0'
        },
        buttonPrimary: {
            width: '100%',
            padding: '10px 16px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            marginBottom: '10px'
        },
        buttonSecondary: {
            width: '100%',
            padding: '10px 16px',
            backgroundColor: '#e2e8f0',
            color: '#1e293b',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            marginBottom: '10px'
        },
        buttonBack: {
            width: '100%',
            padding: '10px 16px',
            backgroundColor: 'transparent',
            color: '#64748b',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem'
        }
    };

    if (!validProducts.includes(id)) {
        return (
            <div style={styles.pageContainer}>
                <div style={styles.card}>
                    <h2 style={{ ...styles.title, color: '#dc2626' }}>Product Not Found</h2>
                    <p style={{ color: '#64748b', margin: '0 0 20px 0' }}>Sorry, the product with ID "{id}" does not exist.</p>
                    <button style={styles.buttonPrimary} onClick={() => navigate('/more/ecommerce/products')}>
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.pageContainer}>
            <div style={styles.card}>
                <h2 style={styles.title}>Product Details: {id}</h2>
                <div style={styles.imageWrapper}>
                    <img src="https://via.placeholder.com/150" alt="Product" style={styles.image} />
                </div>
                <p style={styles.price}>Price: {id === 'prod-1' ? '$99.99' : '$149.99'}</p>
                
                <button style={styles.buttonPrimary} onClick={() => navigate('/more/ecommerce/cart')}>
                    Add to Cart
                </button>
                <button style={styles.buttonSecondary} onClick={() => navigate('/more/ecommerce/products')}>
                    Continue Shopping
                </button>
                <button style={styles.buttonBack} onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default ShopProductDetails;