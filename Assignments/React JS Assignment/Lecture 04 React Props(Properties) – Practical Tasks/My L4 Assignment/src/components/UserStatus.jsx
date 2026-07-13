import React from 'react'

function UserStatus({ name, isActive }) {
    // Define the colors dynamically based on status
    const statusColor = isActive ? '#22c55e' : '#c5221f';
    const bgColor = isActive ? '#e6f4ea' : '#fce8e6';

    const styles = {
        status: {
            padding: '9px 16px',
            margin: '10px 0',
            borderRadius: '100px',
            backgroundColor: bgColor,
            color: statusColor,
            fontFamily: 'Arial, sans-serif',
            maxWidth: '261px',
            display: 'flex',       // Aligns the dot and text horizontally
            alignItems: 'center',  // Centers them vertically
            gap: '8px'             // Adds spacing between dot and text
        },
        dot: {
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: statusColor, // Uses the matching status color
            flexShrink: 0          // Prevents the dot from distorting
        }
    };

    return (
        <div style={styles.status}>
            <span style={styles.dot}></span>
            <span><strong>{name}</strong> is currently: {isActive ? <strong>Active</strong> : <strong>Inactive</strong>}</span>
        </div>
    )
}

export default UserStatus