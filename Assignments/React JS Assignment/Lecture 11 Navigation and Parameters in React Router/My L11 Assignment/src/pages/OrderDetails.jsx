import React from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Order ID: {id}</h2>
      <p>Order Status: Out for Delivery</p>
      <p>Delivery Date: Tomorrow</p>
    </div>
  );
}

export default OrderDetails;