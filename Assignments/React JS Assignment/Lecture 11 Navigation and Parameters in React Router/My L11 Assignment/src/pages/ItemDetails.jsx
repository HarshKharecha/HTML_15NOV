import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Product Details: {id}</h2>
      <img src="https://via.placeholder.com/150" alt="Product" />
      <p>Price: $49.99</p>
    </div>
  );
}

export default ItemDetails;