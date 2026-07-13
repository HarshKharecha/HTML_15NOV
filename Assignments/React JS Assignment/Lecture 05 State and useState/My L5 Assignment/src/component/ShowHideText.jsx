import React, { useState } from 'react'

function ShowHideText() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 5: Show/Hide Text</h3>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide Paragraph' : 'Show Paragraph'}
            </button>
            {isVisible && <p style={{ marginTop: '10px' }}>This is the hidden paragraph text that toggles visibility!</p>}
        </div>
    )
}

export default ShowHideText