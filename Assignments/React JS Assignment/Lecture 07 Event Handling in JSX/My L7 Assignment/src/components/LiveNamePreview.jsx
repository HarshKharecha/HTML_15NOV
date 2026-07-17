import React, { useState } from 'react';

function LiveNamePreview() {
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
            margin: '0 0 20px 0',
            fontSize: '1.5rem'
        },
        inputWrapper: {
            position: 'relative',
            width: '100%'
        },
        input: {
            padding: '12px 16px',
            paddingLeft: '40px',
            fontSize: '1rem',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            outline: 'none',
            color: '#334155',
            backgroundColor: '#ffffff',
            transition: 'all 0.2s ease-in-out',
            width: '100%',
            boxSizing: 'border-box'
        },
        icon: {
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#94a3b8',
            fontSize: '1.1rem',
            pointerEvents: 'none'
        },
        previewBadge: {
            marginTop: '16px',
            padding: '10px 14px',
            backgroundColor: '#f5f3ff',
            borderLeft: '4px solid #7c3aed',
            borderRadius: '4px',
            fontSize: '0.95rem',
            color: '#5b21b6',
            fontWeight: '500',
            wordBreak: 'break-word'
        },
        nameText: {
            color: '#4c1d95',
            fontWeight: '600'
        }
    };

    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = '#7c3aed';
        e.target.style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.15)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = '#cbd5e1';
        e.target.style.boxShadow = 'none';
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 6: Live Name Preview</h3>

            <div style={styles.inputWrapper}>
                <span style={styles.icon}>👤</span>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>

            {name && (
                <div style={styles.previewBadge}>
                    Name: <span style={styles.nameText}>{name}</span>
                </div>
            )}
        </div>
    );
}

export default LiveNamePreview;