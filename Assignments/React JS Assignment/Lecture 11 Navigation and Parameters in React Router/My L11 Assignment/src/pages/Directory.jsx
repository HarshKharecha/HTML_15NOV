import React from 'react';
import { useNavigate } from 'react-router-dom';

function Directory() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Employee Directory</h2>
      <button onClick={() => navigate('/demployee/emp1')}>View Employee</button>
    </div>
  );
}

export default Directory;