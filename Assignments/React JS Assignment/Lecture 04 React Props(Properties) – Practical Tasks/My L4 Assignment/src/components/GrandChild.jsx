import React from 'react';

function GrandChild({ theme }) {
  return (
    <div style={{ padding: '20px', border: '2px solid #ccc', margin: '10px 0', backgroundColor: '#f0f0f0' }}>
      <h4>GrandChild Component</h4>
      <p><strong>Value received via Prop Drilling:</strong> {theme}</p>
    </div>
  );
}

export default GrandChild;