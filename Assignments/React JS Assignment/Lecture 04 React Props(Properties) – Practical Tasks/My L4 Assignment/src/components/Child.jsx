import React from 'react';
import GrandChild from './GrandChild';

function Child({ theme }) {
  return (
    <div style={{ padding: '20px', border: '2px solid #999', margin: '10px 0' }}>
      <h3>Child Component</h3>
      <p>Just passing it through...</p>
      <hr />
      {/* Drilling the prop down to GrandChild */}
      <GrandChild theme={theme} />
    </div>
  );
}

export default Child;