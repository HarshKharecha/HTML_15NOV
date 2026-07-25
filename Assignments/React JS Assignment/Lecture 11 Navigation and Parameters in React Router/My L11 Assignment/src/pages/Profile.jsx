import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Profile Page</h2>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Profile;