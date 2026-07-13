import React, { useState } from 'react'

function ShoppingCartCounter() {
    const styles = {
        button: {
            backgroundColor: "#f2f2f2",
            border: "none",
            padding: "8px 16px",
            margin: "0px 5px",
            borderRadius: "18px",
            fontWeight: "bold",
            fontSize: "larger",
        }
    }

    const [cartItems, setCartItems] = useState(0);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 15: Shopping Cart</h3>
            <p>Cart Count: <span style={styles.button}>🛒 {cartItems}</span></p>
            <button onClick={() => setCartItems(cartItems + 1)}>Add to Cart</button>
        </div>
    )
}

export default ShoppingCartCounter