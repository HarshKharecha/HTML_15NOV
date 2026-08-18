import React from 'react';

const styles = {
    card: {
        border: '1px solid #e2e8f0',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    },
    image: {
        width: '100%',
        height: '140px',
        objectFit: 'cover',
    },
    content: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    category: {
        fontSize: '0.75rem',
        color: '#2563eb',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    title: {
        margin: '0.25rem 0',
        fontSize: '1rem',
        color: '#0f172a',
    },
    price: {
        fontSize: '1.125rem',
        fontWeight: '700',
        color: '#059669',
        margin: '0.25rem 0 0.75rem 0',
    },
    actions: {
        display: 'flex',
        gap: '0.5rem',
        marginTop: 'auto',
    },
    favoriteBtn: {
        flex: 1,
        padding: '0.5rem',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        fontSize: '0.75rem',
        fontWeight: '600',
    },
    cartBtn: {
        flex: 1,
        padding: '0.5rem',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        fontSize: '0.75rem',
        fontWeight: '600',
    },
};

function ProductCard({ product, isFavorite, isCart, onToggleFavorite, onCartColor, onAddToCart }) {
    return (
        <div style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <div style={styles.content}>
                <span style={styles.category}>{product.category}</span>
                <h4 style={styles.title}>{product.title}</h4>
                <p style={styles.price}>₹{product.price.toFixed(2)}</p>

                <div style={styles.actions}>
                    <button
                        onClick={() => onToggleFavorite(product.id)}
                        style={{
                            ...styles.favoriteBtn,
                            backgroundColor: isFavorite ? '#ef4444' : '#f1f5f9',
                            color: isFavorite ? '#ffffff' : '#475569',
                        }}
                    >
                        {isFavorite ? '♥ Favorited' : '♡ Favorite'}
                    </button>

                    <button
                        onClick={() => onAddToCart(product.id)}
                        style={{
                            ...styles.cartBtn,
                            backgroundColor: isCart ? '#f1f5f9' : '#2563eb',
                            color: isCart ? '#475569' : '#ffffff',
                        }}
                    >
                        {isCart ? '✓ In Cart (Remove)' : '+ Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Exporting React.memo optimized component
export default React.memo(ProductCard);