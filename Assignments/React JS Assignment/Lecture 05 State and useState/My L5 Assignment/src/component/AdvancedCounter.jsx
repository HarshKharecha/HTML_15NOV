import React, { useState } from 'react'

function AdvancedCounter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 2: Counter with +/-</h3>
            <p>Count: <strong>{count}</strong></p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count > 1 ? count - 1 : 0)} style={{ marginLeft: '10px' }}>Decrease</button>
        </div>
    )
}

export default AdvancedCounter