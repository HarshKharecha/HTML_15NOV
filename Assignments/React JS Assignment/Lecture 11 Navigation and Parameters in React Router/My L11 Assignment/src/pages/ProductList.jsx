import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const navigate = useNavigate();
  const products = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((p) => (
        <button key={p.id} onClick={() => navigate(`/product/${p.id}`)}>
          View Product {p.id}
        </button>
      ))}
    </div>
  );
}

export default ProductList;