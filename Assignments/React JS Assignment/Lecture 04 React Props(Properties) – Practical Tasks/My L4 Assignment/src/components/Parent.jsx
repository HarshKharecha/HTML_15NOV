import React from 'react';
import Child from './Child';

function Parent({ theme }) {
  return (
    <div style={{ padding: '20px', border: '2px solid #666', margin: '10px 0' }}>
      <h2>Parent Component</h2>
      <p>I don't need the theme, but I must pass it down.</p>
      <hr />
      {/* Drilling the prop down to Child */}
      <Child theme={theme} />
    </div>
  );
}

export default Parent;