import React from 'react';

function StudentAttendance() {
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
        statusBox: (isPresent) => ({
            backgroundColor: isPresent ? '#dcfce7' : '#fee2e2',
            color: isPresent ? '#15803d' : '#b91c1c',
            border: `1px solid ${isPresent ? '#86efac' : '#fca5a5'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '700'
        })
    };

    const isPresent = true;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 18: Attendance Status</h3>
            <div style={styles.statusBox(isPresent)}>
                {isPresent ? "Present" : "Absent"}
            </div>
        </div>
    );
}

export default StudentAttendance;