import React, { useState } from 'react'

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Task 11: Product Quantity</h3>
      <p>Quantity: <strong>{quantity}</strong></p>
      <button onClick={() => setQuantity(quantity + 1)}>Increase</button>
      <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 0)} style={{ marginLeft: '10px' }}>Decrease</button>
    </div>
  )
}

export default ProductQuantity