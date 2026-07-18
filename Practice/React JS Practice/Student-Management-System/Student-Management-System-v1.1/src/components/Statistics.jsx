import React from 'react';

function Statistics({ studentList = [] }) {
  const totalStudents = studentList.length;
  const activeStudents = studentList.filter(student => student.status === 'Active').length;
  const completedStudents = studentList.filter(student => student.status === 'Completed').length;

  const styles = {
    container: {
      padding: '24px 24px 0 24px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
    },
    grid: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '12px',
    },
    card: {
      flex: '1',
      minWidth: '200px',
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
    },
    logo: {
      margin: '0 auto 4px auto',
      fontSize: '51px',
    },
    title: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#64748b',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: 0,
    },
    value: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#0f172a',
      margin: 0,
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ margin: '0 0 4px 0', color: '#1e293b', fontSize: '1.4rem' }}>📊 Dashboard Overview</h2>

      <div style={styles.grid}>
        {/* Total Card */}
        <div style={{ ...styles.card, borderTop: '4px solid #64748b' }}>
          <p style={styles.logo}>🧑‍🎓</p>
          <p style={styles.title}>Total Students</p>
          <h3 style={styles.value}>{totalStudents}</h3>
        </div>

        {/* Active Card */}
        <div style={{ ...styles.card, borderTop: '4px solid #2563eb' }}>
          <p style={styles.logo}>📝</p>
          <p style={styles.title}>🟢 Active Students</p>
          <h3 style={styles.value}>{activeStudents}</h3>
        </div>

        {/* Completed Card */}
        <div style={{ ...styles.card, borderTop: '4px solid #10b981' }}>
          <p style={styles.logo}>🏆</p>
          <p style={styles.title}>🔵 Completed Students</p>
          <h3 style={styles.value}>{completedStudents}</h3>
        </div>
      </div>
    </div>
  );
}

export default Statistics;