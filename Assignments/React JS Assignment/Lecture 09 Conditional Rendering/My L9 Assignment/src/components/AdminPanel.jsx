import React from 'react';

function AdminPanel() {
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
        panel: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px'
        },
        list: {
            margin: '12px 0 0 0',
            paddingLeft: '20px',
            color: '#334155'
        }
    };

    const isAdmin = true;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 12: Admin Panel</h3>
            {isAdmin && (
                <div style={styles.panel}>
                    <h4 style={{ margin: 0, color: '#0f172a' }}>Admin Dashboard</h4>
                    <ul style={styles.list}>
                        <li>Manage Users</li>
                        <li>Reports</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default AdminPanel;