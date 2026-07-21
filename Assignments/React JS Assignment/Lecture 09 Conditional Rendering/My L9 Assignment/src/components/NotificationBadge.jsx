import React from 'react';

function NotificationBadge() {
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
        alertBox: {
            backgroundColor: '#fef3c7',
            color: '#92400e',
            border: '1px solid #fde68a',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '600'
        }
    };

    const notifications = 3;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 5: Notification Badge</h3>
            {notifications > 0 && (
                <div style={styles.alertBox}>
                     You have new notifications ({notifications})
                </div>
            )}
        </div>
    );
}

export default NotificationBadge;