import React from 'react';

function Students() {
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

  const students = [
    { id: 'ST-101', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80', name: 'Aarav Sharma', grade: 'Class 10-A', rollNo: '12', performance: 'Excellent' },
    { id: 'ST-102', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80', name: 'Riya Verma', grade: 'Class 10-B', rollNo: '24', performance: 'Good' },
    { id: 'ST-103', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80', name: 'Diya Patel', grade: 'Class 9-A', rollNo: '08', performance: 'Excellent' },
    { id: 'ST-104', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80', name: 'Kabir Nair', grade: 'Class 11-C', rollNo: '15', performance: 'Average' },
    { id: 'ST-105', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150&q=80', name: 'Ananya Reddy', grade: 'Class 12-B', rollNo: '03', performance: 'Excellent' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Student Roster</h2>
      <div style={styles.grid}>
        {students.map((s) => (
          <div key={s.id} style={styles.card}>
            <img src={s.image} alt={s.name} style={styles.image} />
            <div style={styles.info}>
              <h4 style={styles.name}>{s.name}</h4>
              <p style={styles.text}><strong>Grade:</strong> {s.grade}</p>
              <p style={styles.text}><strong>Roll No:</strong> {s.rollNo}</p>
              <p style={styles.text}>
                <strong>Performance:</strong>{' '}
                <span style={{ color: s.performance === 'Excellent' ? '#16a34a' : s.performance === 'Good' ? '#2563eb' : '#d97706', fontWeight: 'bold' }}>
                  {s.performance}
                </span>
              </p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Opening report card for ${s.name}`)}
            >
              View Report Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;