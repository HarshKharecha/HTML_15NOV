import React, { useState } from 'react';

function LikeButton() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            maxWidth: '500px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 24px 0',
            fontSize: '1.5rem'
        },
        buttonRow: {
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            padding: '10px 0'
        },
        button: {
            color: '#2563eb',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            padding: '10px 20px',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(37, 99, 235, 0.05)'
        },
        iconContainer: {
            position: 'relative',
            padding: '12px'
        },
        badge: {
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            backgroundColor: '#22c55e',
            color: '#ffffff',
            fontSize: '0.75rem',
            fontWeight: '700',
            minWidth: '20px',
            height: '20px',
            padding: '2px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #ffffff',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
        }
    };

    const [likes, setLikes] = useState(0);
    const [likes2, setLikes2] = useState(0);

    const handleMouseOver = (e) => {
        e.currentTarget.style.backgroundColor = '#dbeafe';
        e.currentTarget.style.transform = 'translateY(-1px)';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.backgroundColor = '#eff6ff';
        e.currentTarget.style.transform = 'none';
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 3: Like Button</h3>

            <div style={styles.buttonRow}>
                
                <button
                    style={styles.button}
                    onClick={() => setLikes(likes + 1)}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <span>👍</span> Like {likes}
                </button>

                <button
                    style={{ ...styles.button, ...styles.iconContainer }}
                    onClick={() => setLikes2(likes2 + 1)}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <span style={{ fontSize: '1.2rem' }}>👍</span>
                    <span style={styles.badge}>{likes2}</span>
                </button>
            </div>
        </div>
    );
}

export default LikeButton;