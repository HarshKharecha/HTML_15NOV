import React, { useState } from 'react'

function LightToggle() {
    const [isLightOn, setIsLightOn] = useState(false);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 4: Light Switch</h3>
            <p>Status: <strong>{isLightOn ? "Light ON" : "Light OFF"}</strong></p>
            <button onClick={() => setIsLightOn(!isLightOn)}>Toggle Light</button>
        </div>
    )
}

export default LightToggle