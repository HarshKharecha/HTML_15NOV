import React from 'react';

function ProductCard() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', width: '200px', borderRadius: '5px' }}>
      <div style={{ width: '100%', height: '120px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Placeholder Image
      </div>
      <h4>Wireless Headphones</h4>
      <p>$99.99</p>
    </div>
  );
}

export default ProductCard;