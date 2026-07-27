import React from 'react';

function Profilel() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    heading: {
      color: '#0f172a',
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: '700'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '24px',
      maxWidth: '400px',
      margin: '0 auto'
    },
    avatar: {
      width: '90px',
      height: '90px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '16px',
      border: '3px solid #0284c7'
    },
    info: {
      width: '100%',
      textAlign: 'left',
      marginTop: '12px'
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#0f172a',
      margin: '0 0 4px 0',
      textAlign: 'center'
    },
    text: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: '6px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '16px'
    }
  };

  const studentProfile = {
    name: 'Alex Rivera',
    studentId: 'STU-2026-9012',
    email: 'alex.rivera@edulearn.edu',
    major: 'Computer Science',
    year: '3rd Year (Junior)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'
  };

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Student Profile</h2>
      <div style={styles.card}>
        <img src={studentProfile.avatar} alt={studentProfile.name} style={styles.avatar} />
        <h3 style={styles.title}>{studentProfile.name}</h3>
        <p style={{ color: '#0284c7', fontSize: '0.85rem', fontWeight: '600', textAlign: 'center' }}>
          {studentProfile.studentId}
        </p>
        <div style={styles.info}>
          <p style={styles.text}><strong>Email:</strong> {studentProfile.email}</p>
          <p style={styles.text}><strong>Program:</strong> {studentProfile.major}</p>
          <p style={styles.text}><strong>Academic Year:</strong> {studentProfile.year}</p>
        </div>
        <button
          style={styles.button}
          onClick={() => alert('Editing Profile Details')}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profilel;