import React, { useState } from 'react';

function LightToggle() {
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
        displayPanel: (isOn) => ({
            padding: '24px 16px',
            borderRadius: '10px',
            backgroundColor: isOn ? '#fef08a' : '#cbd5e1', // Soft yellow vs soft slate-gray
            border: isOn ? '1px solid #fde047' : '1px solid #94a3b8',
            textAlign: 'center',
            marginBottom: '20px',
            transition: 'all 0.3s ease',
            boxShadow: isOn ? '0 10px 15px -3px rgba(250, 204, 21, 0.3)' : 'none'
        }),
        statusText: (isOn) => ({
            fontSize: '1.2rem',
            fontWeight: '700',
            color: isOn ? '#854d0e' : '#334155',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
        }),
        button: (isOn) => ({
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: isOn ? '#1e293b' : '#2563eb',
            color: '#ffffff',
            transition: 'background-color 0.2s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        })
    };

    const [isLightOn, setIsLightOn] = useState(false);

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 4: Light Switch</h3>
            
            <div style={styles.displayPanel(isLightOn)}>
                <p style={styles.statusText(isLightOn)}>
                    <span>{isLightOn ? "💡" : "🔨"}</span>
                    Status: {isLightOn ? "Light ON" : "Light OFF"}
                </p>
            </div>

            <button 
                style={styles.button(isLightOn)}
                onClick={() => setIsLightOn(!isLightOn)}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = isLightOn ? '#0f172a' : '#1d4ed8';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = isLightOn ? '#1e293b' : '#2563eb';
                }}
            >
                {isLightOn ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
}

export default LightToggle;