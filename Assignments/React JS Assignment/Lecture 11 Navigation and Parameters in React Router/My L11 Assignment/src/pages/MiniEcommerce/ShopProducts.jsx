import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopProducts() {
    const navigate = useNavigate();
    const products = [
        { id: 'prod-1', name: 'Wireless Headphones', price: '$99.99' },
        { id: 'prod-2', name: 'Smart Watch', price: '$149.99' }
    ];

    return (
        <div>
            <h2>Product Catalog</h2>
            {products.map((p) => (
                <div key={p.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                    <h4>{p.name}</h4>
                    <p>Price: {p.price}</p>
                    <button onClick={() => navigate(`/more/ecommerce/product/${p.id}`)}>View Details</button>
                </div>
            ))}
            <br />
            <button onClick={() => navigate('/more/ecommerce/cart')}>Go to Cart</button>
            <br /><br />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export default ShopProducts;