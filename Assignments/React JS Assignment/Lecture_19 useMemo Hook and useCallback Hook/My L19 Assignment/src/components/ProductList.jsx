import React from 'react';
import ProductCard from './ProductCard';

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1.25rem',
    },
    empty: {
        padding: '2rem',
        textAlign: 'center',
        color: '#64748b',
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        border: '1px solid #e2e8f0',
    },
};

function ProductList({ products, favorites, cart, onToggleFavorite, onAddToCart }) {
    if (products.length === 0) {
        return <div style={styles.empty}>No products found matching criteria.</div>;
    }

    return (
        <div style={styles.grid}>
            {products.slice(0, 40).map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    isFavorite={favorites.includes(product.id)}
                    isCart={cart.includes(product.id)}
                    onToggleFavorite={onToggleFavorite}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}

export default ProductList;