import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccountList() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Bank Accounts</h2>
      <button onClick={() => navigate('/account/ACC987654')}>View Account ACC987654</button>
    </div>
  );
}

export default AccountList;