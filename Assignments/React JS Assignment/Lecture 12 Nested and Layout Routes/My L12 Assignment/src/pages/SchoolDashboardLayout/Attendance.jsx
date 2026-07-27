import React from 'react';

function Attendance() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
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
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #818cf8'
    },
    info: {
      margin: '12px 0'
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
      backgroundColor: '#4338ca',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'background-color 0.2s'
    }
  };

  const attendanceRecords = [
    { id: 'ATT-01', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aarav Sharma', attendancePercentage: '96%', totalPresent: '172 Days', totalAbsent: '7 Days' },
    { id: 'ATT-02', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80', name: 'Riya Verma', attendancePercentage: '88%', totalPresent: '158 Days', totalAbsent: '21 Days' },
    { id: 'ATT-03', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80', name: 'Diya Patel', attendancePercentage: '99%', totalPresent: '177 Days', totalAbsent: '2 Days' },
    { id: 'ATT-04', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Kabir Nair', attendancePercentage: '74%', totalPresent: '132 Days', totalAbsent: '47 Days' },
    { id: 'ATT-05', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80', name: 'Ananya Reddy', attendancePercentage: '92%', totalPresent: '165 Days', totalAbsent: '14 Days' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Attendance Summaries</h2>
      <div style={styles.grid}>
        {attendanceRecords.map((att) => (
          <div key={att.id} style={styles.card}>
            <img src={att.image} alt={att.name} style={styles.image} />
            <div style={styles.info}>
              <h4 style={styles.name}>{att.name}</h4>
              <p style={styles.text}><strong>Rate:</strong> <span style={{ color: parseInt(att.attendancePercentage) >= 85 ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>{att.attendancePercentage}</span></p>
              <p style={styles.text}><strong>Present:</strong> {att.totalPresent}</p>
              <p style={styles.text}><strong>Absent:</strong> {att.totalAbsent}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Viewing detailed logs for ${att.name}`)}
            >
              Detailed Log
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;