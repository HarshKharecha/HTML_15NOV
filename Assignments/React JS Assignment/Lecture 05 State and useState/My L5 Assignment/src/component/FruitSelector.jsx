import React, { useState } from 'react'

function FruitSelector() {
    const [fruit, setFruit] = useState('Apple');

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 13: Fruit Selector</h3>
            <p>Favorite Fruit: <strong>{fruit}</strong></p>
            <button onClick={() => setFruit('Mango')}>Mango</button>
            <button onClick={() => setFruit('Banana')} style={{ marginLeft: '10px' }}>Banana</button>
            <button onClick={() => setFruit('Orange')} style={{ marginLeft: '10px' }}>Orange</button>
        </div>
    )
}

export default FruitSelector