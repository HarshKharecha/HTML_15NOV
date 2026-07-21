import React, { useState } from 'react';

function AgeVerification() {
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
        displayBox: (textResult) => ({
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            color: textResult === "Eligible to Vote" ? '#2563eb': '#ef4444',
            fontWeight: '600'
        }),
        input: {
            width: '100%',
            padding: '8px 12px',
            marginBottom: '16px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            boxSizing: 'border-box',
        }
    };

    const [age, setAges] = useState(20);

    const renderEligibility = () => {
        if (age >= 18) {
            return "Eligible to Vote";
        } else {
            return "Not Eligible";
        }
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 3: Age Verification</h3>
            <input type="number" style={styles.input} placeholder="Enter Age" value={age} onChange={(e) => setAges(e.target.value)} />
            <div style={styles.displayBox(renderEligibility())}>
                {renderEligibility()}
            </div>
        </div>
    );
}

export default AgeVerification;