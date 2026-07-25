import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Orders</h2>
      <button onClick={() => navigate('/order/ORD123')}>Track Order ORD123</button>
    </div>
  );
}

export default OrderList;