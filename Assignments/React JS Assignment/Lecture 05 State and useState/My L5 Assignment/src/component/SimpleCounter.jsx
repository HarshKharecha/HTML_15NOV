import React, { useState } from 'react'

function SimpleCounter() {
    const [count, setCount] = useState(0);
    
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Task 1: Simple Counter</h3>
      <p>Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default SimpleCounter