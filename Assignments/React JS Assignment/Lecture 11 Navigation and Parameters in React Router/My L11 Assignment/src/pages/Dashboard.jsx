import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Student Dashboard</h2>
      <button onClick={() => navigate('/profile')}>Go to Profile</button>
    </div>
  );
}

export default Dashboard;