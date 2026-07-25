import React from 'react';
import { useParams } from 'react-router-dom';

function FoodDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Food Item: {id}</h2>
      <p>Price: $12.99</p>
      <p>Description: Freshly baked crust with extra mozzarella cheese and basil.</p>
    </div>
  );
}

export default FoodDetails;