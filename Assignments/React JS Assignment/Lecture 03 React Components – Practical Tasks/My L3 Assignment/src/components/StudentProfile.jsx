import React from 'react';

function StudentProfile() {
  const styles = {
    card: {
      backgroundColor: '#ffffff',
      borderLeft: '5px solid #10b981',
      borderRadius: '8px',
      padding: '20px',
      minWidth: '240px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.04)',
    },
    heading: {
      margin: '0 0 12px 0',
      color: '#0f172a',
      fontSize: '1.2rem',
      borderBottom: '1px solid #f1f5f9',
      paddingBottom: '6px'
    },
    text: {
      margin: '6px 0',
      color: '#475569',
      fontSize: '0.95rem'
    }
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>Student Profile</h3>
      <p style={styles.text}><strong>Name:</strong> Genius</p>
      <p style={styles.text}><strong>Course:</strong> Computer Science</p>
      <p style={styles.text}><strong>City:</strong> New York</p>
    </div>
  );
}

export default StudentProfile;