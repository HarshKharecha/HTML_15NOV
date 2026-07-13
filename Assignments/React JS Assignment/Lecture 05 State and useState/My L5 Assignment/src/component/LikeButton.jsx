import React, { useState } from 'react'

function LikeButton() {
    const styles = {
        container: { padding: '20px', border: '1px solid #ccc', margin: '10px' },

        button: {
            color: "#2563eb",
            backgroundColor: "#f2f2f2",
            border: "none",
            padding: "8px 16px",
            margin: "0px 5px",
            borderRadius: "18px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "larger",
        },

        iconcontainer: {
            position: 'relative',
        },

        badge: {
            position: 'absolute',
            top: '-12px',
            right: '-15px',
            backgroundColor: '#22c55e',
            color: '#ffffff',
            fontSize: '15px',
            fontWeight: 'bold',
            minWidth: '21px',
            minHeight: '21px',
            padding: '4px',
            borderRadius: '51%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #ffffff',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        }
    }

    const [likes, setLikes] = useState(0);
    const [likes2, setLikes2] = useState(0);
    return (
        <div style={styles.container}>
            <h3>Task 3: Like Button</h3>
            <button style={styles.button} onClick={() => setLikes(likes + 1)}>👍 Like {likes}</button>
            <button style={{ ...styles.button, ...styles.iconcontainer }} onClick={() => setLikes2(likes2 + 1)}>👍<span style={styles.badge}>{likes2}</span></button>
        </div>
    )
}

export default LikeButton