import React from 'react';
import { useParams } from 'react-router-dom';

function AccountDetails() {
  const { accountNumber } = useParams();
  return (
    <div>
      <h2>Account Number: {accountNumber}</h2>
      <p>Account Holder: Jane Doe</p>
      <p>Balance: $5,430.00</p>
    </div>
  );
}

export default AccountDetails;