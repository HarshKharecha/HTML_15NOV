import React, { useState } from 'react';

function ChangeBgColor() {
    const styles = {
        mainContainer: { 
            padding: '24px', 
            border: '1px solid #e2e8f0', 
            borderRadius: '12px', 
            margin: '20px', 
            backgroundColor: '#ffffff', 
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
        canvas: (color) => ({
            width: '100%',
            height: '120px',
            borderRadius: '8px',
            backgroundColor: color,
            border: '1px solid #e2e8f0',
            transition: 'background-color 0.4s ease',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.03)'
        }),
        colorHexValue: {
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#334155',
            letterSpacing: '0.5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            backdropFilter: 'blur(4px)'
        },
        buttonRow: {
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap'
        },
        button: (btnColor) => ({
            padding: '10px 14px',
            fontSize: '0.9rem',
            fontWeight: '600',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }),
        swatchCircle: (color) => ({
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: color,
            border: '1px solid rgba(0,0,0,0.1)',
            display: 'inline-block'
        })
    };

    const [bgColor, setBgColor] = useState('#ffffff');

    const handleColorChange = (color) => {
        setBgColor(color);
    };

    const colorOptions = [
        { name: 'Red-ish', hex: '#ff8c94' },
        { name: 'Green-ish', hex: '#a8e6cf' },
        { name: 'Yellow-ish', hex: '#dcedc1' },
    ];

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 5: Change Background Color</h3>
            
            <div style={styles.canvas(bgColor)}>
                <span style={styles.colorHexValue}>
                    {bgColor.toUpperCase()}
                </span>
            </div>
            
            <div style={styles.buttonRow}>
                {colorOptions.map((opt) => (
                    <button 
                        key={opt.hex}
                        onClick={() => handleColorChange(opt.hex)}
                        style={styles.button(opt.hex)}
                        onMouseOver={(e) => {
                            e.currentTarget.style.borderColor = '#94a3b8';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.borderColor = '#cbd5e1';
                            e.currentTarget.style.transform = 'none';
                        }}
                    >
                        <span style={styles.swatchCircle(opt.hex)}></span>
                        {opt.name}
                    </button>
                ))}

                <button 
                    onClick={() => handleColorChange('#ffffff')}
                    style={{ ...styles.button('#ffffff'), marginLeft: 'auto', backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                >
                    🔄 Reset
                </button>
            </div>
        </div>
    );
}

export default ChangeBgColor;