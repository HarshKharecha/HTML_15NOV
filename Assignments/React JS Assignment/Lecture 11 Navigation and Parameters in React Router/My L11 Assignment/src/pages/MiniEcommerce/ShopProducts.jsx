import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopProducts() {
    const navigate = useNavigate();
    
    const styles = {
        pageContainer: {
            fontFamily: 'system-ui, sans-serif',
            padding: '30px',
            backgroundColor: '#f8fafc',
        },
        header: {
            marginBottom: '24px',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '15px'
        },
        grid: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '30px'
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '20px',
            width: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        productName: {
            fontSize: '1rem',
            fontWeight: '600',
            color: '#1e293b',
            margin: '0 0 8px 0'
        },
        price: {
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#2563eb',
            margin: '0 0 15px 0'
        },
        buttonPrimary: {
            padding: '8px 16px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem'
        },
        actionRow: {
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
        },
        buttonSecondary: {
            padding: '8px 16px',
            backgroundColor: '#e2e8f0',
            color: '#1e293b',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.9rem'
        }
    };

    const products = [
        { id: 'prod-1', name: 'Wireless Headphones', price: '$99.99' },
        { id: 'prod-2', name: 'Smart Watch', price: '$149.99' }
    ];

    return (
        <div style={styles.pageContainer}>
            <div style={styles.header}>
                <h2 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Product Catalog</h2>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>Explore our available tech gear.</p>
            </div>

            <div style={styles.grid}>
                {products.map((p) => (
                    <div key={p.id} style={styles.card}>
                        <div>
                            <h4 style={styles.productName}>{p.name}</h4>
                            <p style={styles.price}>{p.price}</p>
                        </div>
                        <button style={styles.buttonPrimary} onClick={() => navigate(`/more/ecommerce/product/${p.id}`)}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            <div style={styles.actionRow}>
                <button style={styles.buttonSecondary} onClick={() => navigate('/more/ecommerce/cart')}>
                    Go to Cart
                </button>
                <button style={styles.buttonSecondary} onClick={() => navigate(-1)}>
                    ← Back
                </button>
            </div>
        </div>
    );
}

export default ShopProducts;