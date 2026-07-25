import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopHome() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Mini E-Commerce Home</h2>
            <p>Welcome to our store! Browse our exclusive collection.</p>
            <button onClick={() => navigate('/more/ecommerce/products')}>Browse Products</button>
        </div>
    );
}

export default ShopHome;