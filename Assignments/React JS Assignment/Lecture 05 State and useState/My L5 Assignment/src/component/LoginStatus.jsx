import React, { useState } from 'react'

function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
            <h3>Task 8: Login Status</h3>
            <p>Status: <strong>{isLoggedIn ? 'Logged In' : 'Logged Out'}</strong></p>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

export default LoginStatus