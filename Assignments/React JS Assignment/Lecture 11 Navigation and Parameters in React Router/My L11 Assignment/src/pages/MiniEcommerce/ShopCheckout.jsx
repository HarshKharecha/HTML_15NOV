import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopCheckout() {
    const navigate = useNavigate();

    const handleCheckout = (e) => {
        e.preventDefault();
        navigate('/more/ecommerce/success');
    };

    return (
        <div>
            <h2>Checkout Page</h2>
            <form onSubmit={handleCheckout}>
                <input type="text" placeholder="Shipping Address" required style={{ display: 'block', margin: '10px 0' }} />
                <button type="submit">Complete Order</button>
            </form>
        </div>
    );
}

export default ShopCheckout;