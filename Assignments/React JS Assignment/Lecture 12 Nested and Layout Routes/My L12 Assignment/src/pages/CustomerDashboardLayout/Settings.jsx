import React from 'react';

function Settings() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #d5d9d9',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    },
    heading: {
      color: '#0f1111',
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: '700'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      border: '1px solid #d5d9d9',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    info: {
      margin: '8px 0',
      width: '100%'
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f1111',
      margin: '0 0 6px 0'
    },
    text: {
      fontSize: '0.875rem',
      color: '#565959',
      margin: '4px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#ffd814',
      color: '#0f1111',
      border: '1px solid #fcd200',
      borderRadius: '20px',
      padding: '8px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '12px'
    }
  };

  const settingsList = [
    { id: 'SET-01', category: 'Email Notifications', status: 'Subscribed to Deals & Order Updates' },
    { id: 'SET-02', category: 'SMS Preferences', status: 'Delivery Notifications Enabled' },
    { id: 'SET-03', category: 'Language & Region', status: 'English - IN (INR ₹)' },
    { id: 'SET-04', category: 'Payment Methods', status: '2 Saved Cards & UPI linked' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Account Settings & Preferences</h2>
      <div style={styles.grid}>
        {settingsList.map((s) => (
          <div key={s.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.title}>{s.category}</h4>
              <p style={styles.text}>{s.status}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Configuring ${s.category}`)}
            >
              Configure
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;