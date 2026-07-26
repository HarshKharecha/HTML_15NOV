import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PatientDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const styles = {
    pageWrapper: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '20px',
      padding: '32px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    },
    backButton: {
      marginBottom: '24px',
      padding: '8px 16px',
      backgroundColor: '#f1f5f9',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#334155',
      transition: 'background-color 0.2s ease'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    metaText: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#0ea5e9',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: 0
    },
    heading: {
      color: '#0f172a',
      fontSize: '2rem',
      fontWeight: '800',
      margin: 0,
      lineHeight: '1.3'
    },
    divider: {
      border: 'none',
      borderTop: '1px solid #e2e8f0',
      margin: '8px 0 16px 0'
    },
    infoRow: {
      fontSize: '1.05rem',
      color: '#334155',
      lineHeight: '1.7',
      margin: 0
    },
    statusBadge: {
      color: '#16a34a',
      fontWeight: 'bold',
      backgroundColor: '#dcfce7',
      padding: '2px 8px',
      borderRadius: '6px'
    }
  };

  const patientsData = {
    '500': {
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      room: 'Room 302-B',
      condition: 'Stable',
      attendingDoctor: 'Dr. Smith'
    }
  };

  const patient = patientsData[id];

  if (!patient) {
    return (
      <div style={{ ...styles.pageWrapper, textAlign: 'center' }}>
        <h2 style={{ color: '#dc2626' }}>Patient Not Found</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>No records found for Patient ID: {id}</p>
        <button style={styles.backButton} onClick={() => navigate(-1)}>← Back to Patient List</button>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <button 
        style={styles.backButton} 
        onClick={() => navigate(-1)}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
      >
        ← Back to List
      </button>

      <div style={styles.contentContainer}>
        <p style={styles.metaText}>Patient ID: {id}</p>
        <h2 style={styles.heading}>{patient.name}</h2>
        <hr style={styles.divider} />
        <p style={styles.infoRow}><strong>Age / Gender:</strong> {patient.age} years / {patient.gender}</p>
        <p style={styles.infoRow}><strong>Room:</strong> {patient.room}</p>
        <p style={styles.infoRow}><strong>Attending Doctor:</strong> {patient.attendingDoctor}</p>
        <p style={styles.infoRow}><strong>Condition:</strong> <span style={styles.statusBadge}>{patient.condition}</span></p>
      </div>
    </div>
  );
}

export default PatientDetails;