import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    label: {
      fontSize: '0.8rem',
      color: '#64748b',
      textTransform: 'uppercase',
      fontWeight: '700'
    },
    value: {
      fontSize: '1rem',
      color: '#0f172a',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container}>
      <h3>👤 User Profile</h3>
      <div style={styles.field}>
        <span style={styles.label}>User ID</span>
        <span style={styles.value}>{userId || 'usr-101'}</span>
      </div>
      <div style={styles.field}>
        <span style={styles.label}>Full Name</span>
        <span style={styles.value}>Alex Morgan</span>
      </div>
      <div style={styles.field}>
        <span style={styles.label}>Email Address</span>
        <span style={styles.value}>alex.morgan@company.com</span>
      </div>
      <div style={styles.field}>
        <span style={styles.label}>Role</span>
        <span style={styles.value}>Lead Designer</span>
      </div>
    </div>
  );
}

export default UserProfile;