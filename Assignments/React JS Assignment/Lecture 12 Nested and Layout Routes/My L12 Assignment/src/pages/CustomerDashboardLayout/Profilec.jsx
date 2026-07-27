import React from 'react';

function Profilec() {
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
    image: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '12px',
      border: '2px solid #ff9900'
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

  const userProfile = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    mobile: '+91 98123 45678',
    password: '••••••••••••',
    '2FA': 'Enabled',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
  };

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Login & Security Profile</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <img src={userProfile.avatar} alt={userProfile.name} style={styles.image} />
          <div style={styles.info}>
            <h4 style={styles.title}>{userProfile.name}</h4>
            <p style={styles.text}><strong>Email:</strong> {userProfile.email}</p>
            <p style={styles.text}><strong>Mobile:</strong> {userProfile.mobile}</p>
            <p style={styles.text}><strong>Password:</strong> {userProfile.password}</p>
            <p style={styles.text}><strong>Two-Factor Auth:</strong> <span style={{ color: '#007600', fontWeight: 'bold' }}>{userProfile['2FA']}</span></p>
          </div>
          <button
            style={styles.button}
            onClick={() => alert('Editing Security Credentials')}
          >
            Edit Credentials
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profilec;