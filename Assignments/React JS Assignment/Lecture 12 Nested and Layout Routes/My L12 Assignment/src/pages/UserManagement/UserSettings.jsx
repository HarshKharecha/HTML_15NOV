import React from 'react';

function UserSettings() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    },
    label: {
      fontSize: '0.9rem',
      color: '#334155',
      fontWeight: '500'
    },
    button: {
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      marginTop: '8px'
    }
  };

  return (
    <div style={styles.container}>
      <h3>⚙️ Account Settings</h3>
      <div style={styles.row}>
        <span style={styles.label}>Email Notifications</span>
        <input type="checkbox" defaultChecked />
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Two-Factor Authentication</span>
        <input type="checkbox" />
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Public Profile Visibility</span>
        <input type="checkbox" defaultChecked />
      </div>
      <button
        style={styles.button}
        onClick={() => alert('Settings saved successfully!')}
      >
        Save Changes
      </button>
    </div>
  );
}

export default UserSettings;