import React from 'react';
import { useNavigate } from 'react-router-dom';

function CompanyHome() {
  const styles = {
    mainContainer: {
      fontFamily: 'system-ui, sans-serif',
      margin: '20px',
      padding: '24px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      border: '1px solid #e2e8f0'
    },
    subContainer: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)',
      transition: 'all 0.2s'
    },
    heading: {
      color: '#0f172a',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '12px',
      margin: '0 0 16px 0',
      fontSize: '1.5rem'
    },
    buttonContainer: {
      display: 'flex',
      gap: '12px',
      marginTop: '16px'
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 16px',
      fontSize: '0.95rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    }
  };

  const navigate = useNavigate();

  return (
    <div style={styles.mainContainer}>
      <div style={styles.subContainer}>
        <h2 style={styles.heading}>Welcome to Our Company Home Page</h2>
        <p style={{ color: '#475569' }}>
          <strong>Building innovative digital experiences and robust solutions for tomorrow.</strong>
        </p>
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => navigate('/companyservices')}
          >
            Go to Services
          </button>
          <button
            style={styles.button}
            onClick={() => navigate('/companycontact')}
          >
            Go to Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyHome;