import React from 'react';

function Profile() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0'
    },
    heading: {
      color: '#0f172a',
      marginBottom: '20px',
      fontSize: '1.5rem'
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
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)',
      transition: 'all 0.2s'
    },
    image: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #10b981'
    },
    info: {
      margin: '9px auto'
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: 0
    },
    text: {
      fontSize: '0.9rem',
      color: '#64748b',
      margin: '4px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#059669',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      margin: '9px auto',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'background-color 0.2s'
    }
  };

  const userProfile = {
    name: 'Siddharth Varma',
    email: 'siddharth.varma@example.com',
    phone: '+91 98765 43210',
    kycStatus: 'Verified',
    customerID: 'CUST-8839120',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
  };

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>User Profile & Security</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <img src={userProfile.avatar} alt={userProfile.name} style={styles.image} />
          <div style={styles.info}>
            <h4 style={styles.name}>{userProfile.name}</h4>
            <p style={styles.text}><strong>Customer ID:</strong> {userProfile.customerID}</p>
            <p style={styles.text}><strong>Email:</strong> {userProfile.email}</p>
            <p style={styles.text}><strong>Phone:</strong> {userProfile.phone}</p>
            <p style={styles.text}>
              <strong>KYC Status:</strong>{' '}
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>{userProfile.kycStatus}</span>
            </p>
          </div>
          <button
            style={styles.button}
            onClick={() => alert('Opening Profile Edit Window')}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;