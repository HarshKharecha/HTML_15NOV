import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductGallery() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Product Gallery</h2>
      <div onClick={() => navigate('/item/shoes')} style={{ cursor: 'pointer' }}>
        <img src="https://via.placeholder.com/150" alt="Shoes" />
        <p>Running Shoes - $49.99</p>
      </div>
    </div>
  );
}

export default ProductGallery;