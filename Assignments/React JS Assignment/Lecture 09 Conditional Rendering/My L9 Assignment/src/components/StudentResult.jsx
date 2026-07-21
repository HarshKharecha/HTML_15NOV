import React, { useState } from 'react';

function StudentResult() {
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
        input: {
            width: '100%',
            padding: '8px 12px',
            marginBottom: '16px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            boxSizing: 'border-box',
        },
        badge: (isPass) => ({
            backgroundColor: isPass ? '#dcfce7' : '#fee2e2',
            color: isPass ? '#15803d' : '#b91c1c',
            border: `1px solid ${isPass ? '#86efac' : '#fca5a5'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: '700'
        })
    };

    const [marks, setMarks] = useState(42);
    const isPass = marks !== '' && Number(marks) >= 35;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 2: Student Result</h3>
            <input type="number" style={styles.input} placeholder="Enter Marks" value={marks} onChange={(e) => setMarks(e.target.value)} />
            <div style={styles.badge(isPass)}>
                {isPass ? "Pass" : "Fail"}
            </div>
        </div>
    );
}

export default StudentResult;