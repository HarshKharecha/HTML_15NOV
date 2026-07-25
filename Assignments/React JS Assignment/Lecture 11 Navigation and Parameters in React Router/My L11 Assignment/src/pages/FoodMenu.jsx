import React from 'react';
import { useNavigate } from 'react-router-dom';

function FoodMenu() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Food Menu</h2>
      <button onClick={() => navigate('/food/pizza')}>View Margherita Pizza</button>
    </div>
  );
}

export default FoodMenu;