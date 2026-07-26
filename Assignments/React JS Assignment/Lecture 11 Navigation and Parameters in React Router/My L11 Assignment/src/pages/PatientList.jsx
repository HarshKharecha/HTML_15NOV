import React from 'react';
import { useNavigate } from 'react-router-dom';

function PatientList() {
  const navigate = useNavigate();

  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '20px',
      padding: '32px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
    },
    headerSection: {
      marginBottom: '24px',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '16px'
    },
    heading: {
      color: '#0f172a',
      fontSize: '1.75rem',
      fontWeight: '700',
      margin: '0 0 8px 0'
    },
    subHeading: {
      color: '#64748b',
      fontSize: '0.95rem',
      margin: 0
    },
    patientCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer'
    },
    patientName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: 0
    },
    patientDetailsText: {
      fontSize: '0.95rem',
      color: '#475569',
      margin: 0
    },
    viewButton: {
      alignSelf: 'flex-start',
      backgroundColor: '#0ea5e9',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 18px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(14, 165, 233, 0.2)',
      transition: 'background-color 0.2s ease'
    }
  };

  const patient = {
    id: '500',
    name: 'John Doe',
    condition: 'Stable',
    room: 'Room 302-B'
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerSection}>
        <h2 style={styles.heading}>Patient Management</h2>
        <p style={styles.subHeading}>Monitor patient status, records, and treatment details.</p>
      </div>

      <div 
        style={styles.patientCard}
        onClick={() => navigate(`/patient/${patient.id}`)}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#0ea5e9';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0px 10px 15px -3px rgba(14, 165, 233, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#e2e8f0';
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.02)';
        }}
      >
        <h3 style={styles.patientName}>{patient.name}</h3>
        <p style={styles.patientDetailsText}><strong>Location:</strong> {patient.room} | <strong>Condition:</strong> {patient.condition}</p>
        <button 
          style={styles.viewButton}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/patient/${patient.id}`);
          }}
        >
          View Patient {patient.id} →
        </button>
      </div>
    </div>
  );
}

export default PatientList;