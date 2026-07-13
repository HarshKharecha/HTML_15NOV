import React, { useState } from 'react'

function ColorChanger() {
    const [name, setColor] = useState('false');
    const color = name ? 'Red' : 'Blue';

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 9: Color Changer</h3>
            <p>Current Color: <strong style={{ color: color.toLowerCase() }}>{color}</strong></p>
            <button onClick={() => setColor(!name)}>Change Color</button>
        </div>
    )
}

export default ColorChanger