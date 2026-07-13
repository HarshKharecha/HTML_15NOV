import React, { useState } from 'react'

function GreetingMessage() {
    const [greeting, setGreeting] = useState(false);
    const name = greeting ? 'Good Morning' : 'Good Evening';

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 7: Greeting Message</h3>
            <p>Message: <strong>{name}</strong></p>
            <button onClick={() => setGreeting(!greeting)}>Change Greeting</button>
        </div>
    )
}

export default GreetingMessage