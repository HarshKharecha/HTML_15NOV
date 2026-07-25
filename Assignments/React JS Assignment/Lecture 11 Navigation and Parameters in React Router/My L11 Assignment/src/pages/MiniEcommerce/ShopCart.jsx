import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopCart() {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Shopping Cart</h2>
            <p>Items selected in your cart.</p>
            <button onClick={() => navigate('/more/ecommerce/checkout')}>Proceed to Checkout</button>
            <br /><br />
            <button onClick={() => navigate('/more/ecommerce/products')}>Continue Shopping</button>
        </div>
    );
}

export default ShopCart;