import React from 'react';

function BankAccountStatus() {
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
        statusBox: (isActive) => ({
            backgroundColor: isActive ? '#dcfce7' : '#fee2e2',
            color: isActive ? '#15803d' : '#b91c1c',
            border: `1px solid ${isActive ? '#86efac' : '#fca5a5'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '700'
        })
    };

    const isAccountActive = true;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 13: Bank Account Status</h3>
            <div style={styles.statusBox(isAccountActive)}>
                {isAccountActive ? "Account Active" : "Account Blocked"}
            </div>
        </div>
    );
}

export default BankAccountStatus;