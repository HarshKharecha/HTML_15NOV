import React, { useState } from 'react'

function TemperatureDisplay() {
    const [temp, setTemp] = useState(25);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 12: Temperature Display</h3>
            <p>Temperature: <strong>{temp}°C</strong></p>
            <button onClick={() => setTemp(temp + 1)}>Increase Temp</button>
            <button onClick={() => setTemp(temp - 1)} style={{ marginLeft: '10px' }}>Decrease Temp</button>
        </div>
    )
}

export default TemperatureDisplay