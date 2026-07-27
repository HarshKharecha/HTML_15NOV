import React from 'react';

function Attendancel() {
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
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '24px'
    },
    statCard: {
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#0284c7',
      margin: '4px 0'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#64748b'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: '0.9rem'
    },
    th: {
      backgroundColor: '#f1f5f9',
      color: '#334155',
      textAlign: 'left',
      padding: '12px',
      borderBottom: '2px solid #e2e8f0'
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #e2e8f0',
      color: '#475569'
    }
  };

  const attendanceRecords = [
    { date: '27 Jul 2026', subject: 'Full-Stack Web Development', status: 'Present' },
    { date: '24 Jul 2026', subject: 'Data Science & Machine Learning', status: 'Present' },
    { date: '22 Jul 2026', subject: 'UI/UX Design Masterclass', status: 'Present' },
    { date: '20 Jul 2026', subject: 'Full-Stack Web Development', status: 'Absent' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Attendance Summary</h2>
      
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Overall Attendance</div>
          <div style={styles.statNumber}>92%</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Total Classes</div>
          <div style={styles.statNumber}>48</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Attended</div>
          <div style={styles.statNumber}>44</div>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((r, i) => (
            <tr key={i}>
              <td style={styles.td}>{r.date}</td>
              <td style={styles.td}>{r.subject}</td>
              <td style={{ ...styles.td, color: r.status === 'Present' ? '#166534' : '#b91c1c', fontWeight: '600' }}>
                {r.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Attendancel;