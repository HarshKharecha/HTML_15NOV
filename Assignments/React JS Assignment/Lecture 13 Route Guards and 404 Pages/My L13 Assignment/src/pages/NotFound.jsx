import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const styles = {
    mainContainer: {
      fontFamily: 'system-ui, sans-serif',
      margin: '20px',
      padding: '40px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      textAlign: 'center'
    },
    heading: { fontSize: '3rem', color: '#ef4444', margin: '0 0 10px 0' },
    subHeading: { fontSize: '1.25rem', color: '#0f172a', marginBottom: '16px' },
    button: { backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }
  };

  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.heading}>404</h1>
      <h2 style={styles.subHeading}>Oops! Page Not Found</h2>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>The page you are looking for doesn't exist or has been moved.</p>
      <button style={styles.button} onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;