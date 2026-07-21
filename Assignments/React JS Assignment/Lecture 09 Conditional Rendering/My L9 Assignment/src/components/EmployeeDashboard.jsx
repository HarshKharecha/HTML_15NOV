import React from 'react';

function EmployeeDashboard() {
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
        dashboard: {
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            padding: '20px',
            color: '#1e293b'
        }
    };

    const isEmployee = true;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 11: Employee Dashboard</h3>
            {isEmployee && (
                <div style={styles.dashboard}>
                    <h4>📋 Employee Dashboard</h4>
                    <p>Welcome to your personal work analytics and task portal.</p>
                </div>
            )}
        </div>
    );
}

export default EmployeeDashboard;