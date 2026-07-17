import React, { useState } from 'react';

function CounterApp() {
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
        counterDisplay: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '24px',
            marginBottom: '20px',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
        },
        label: {
            fontSize: '0.9rem',
            color: '#64748b',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            margin: '0 0 8px 0'
        },
        countNumber: {
            fontSize: '3rem',
            fontWeight: '800',
            color: '#2563eb',
            margin: 0,
            lineHeight: 1
        },
        button: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
        }
    };

    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 2: Counter Application</h3>
            
            {/* Structured Numerical Panel */}
            <div style={styles.counterDisplay}>
                <p style={styles.label}>Current Count</p>
                <h4 style={styles.countNumber}>{count}</h4>
            </div>

            {/* Interactive Control Trigger */}
            <button 
                style={styles.button}
                onClick={handleIncrease}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                    e.currentTarget.style.transform = 'none';
                }}
            >
                <span>➕</span> Increase Count
            </button>
        </div>
    );
}

export default CounterApp;