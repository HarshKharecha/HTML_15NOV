import React from 'react';

function UserCard() {
  return (
    <div style={{ border: '1px solid blue', borderRadius: '8px', padding: '15px', width: '250px' }}>
      <h3>Jane Smith</h3>
      <p><strong>Profession:</strong> UX/UI Designer</p>
      <p><strong>City:</strong> San Francisco</p>
    </div>
  );
}

export default UserCard;