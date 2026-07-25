import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ShopProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const validProducts = ['prod-1', 'prod-2'];

    if (!validProducts.includes(id)) {
        return (
            <div>
                <h2>Product Not Found</h2>
                <p>Sorry, the product with ID "{id}" does not exist.</p>
                <button onClick={() => navigate('/more/ecommerce/products')}>Continue Shopping</button>
            </div>
        );
    }

    return (
        <div>
            <h2>Product Details: {id}</h2>
            <img src="https://via.placeholder.com/150" alt="Product" />
            <p>Price: {id === 'prod-1' ? '$99.99' : '$149.99'}</p>
            <button onClick={() => navigate('/more/ecommerce/cart')}>Add to Cart</button>
            <br /><br />
            <button onClick={() => navigate('/more/ecommerce/products')}>Continue Shopping</button>
            <br /><br />
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export default ShopProductDetails;