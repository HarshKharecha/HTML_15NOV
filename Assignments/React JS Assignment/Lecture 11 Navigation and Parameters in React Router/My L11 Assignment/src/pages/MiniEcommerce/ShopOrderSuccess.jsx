import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopOrderSuccess() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Order Success!</h2>
            <p>Thank you for your purchase. Your order has been placed successfully.</p>
            <button onClick={() => navigate('/more/ecommerce/home')}>Back to E-Commerce Home</button>
        </div>
    );
}

export default ShopOrderSuccess;