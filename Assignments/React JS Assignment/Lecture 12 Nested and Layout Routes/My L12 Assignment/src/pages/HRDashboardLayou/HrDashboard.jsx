import React from 'react';

function HrDashboard() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '28px'
    },
    statCard: {
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center'
    },
    statNum: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#0284c7',
      margin: '4px 0'
    },
    statLabel: {
      fontSize: '0.85rem',
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

  const announcements = [
    { id: 1, title: 'Annual Health Checkup Drive', date: 'Jul 28, 2026', dept: 'All Company' },
    { id: 2, title: 'Q3 Goal Setting Submissions Open', date: 'Jul 30, 2026', dept: 'All Managers' },
    { id: 3, title: 'New Remote Work Guidelines Published', date: 'Aug 02, 2026', dept: 'Operations' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>HR Overview Dashboard</h2>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Total Workforce</div>
          <div style={styles.statNum}>248</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>On Leave Today</div>
          <div style={styles.statNum}>12</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Pending Requests</div>
          <div style={styles.statNum}>7</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Open Positions</div>
          <div style={styles.statNum}>15</div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '12px' }}>Company Announcements</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Target Department</th>
            <th style={styles.th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((a) => (
            <tr key={a.id}>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{a.title}</td>
              <td style={styles.td}>{a.dept}</td>
              <td style={styles.td}>{a.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HrDashboard;