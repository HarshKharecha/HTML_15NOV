import React from 'react';

function Blog() {
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
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
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
    recentSection: {
      marginTop: '24px'
    },
    subHeading: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#0f172a',
      marginBottom: '12px'
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

  const recentPosts = [
    { id: 'POST-101', title: 'Getting Started with React 19', views: '12,450', date: '26 Jul 2026' },
    { id: 'POST-102', title: 'Top Design Systems in 2026', views: '8,210', date: '22 Jul 2026' },
    { id: 'POST-103', title: 'Building Scalable APIs', views: '15,890', date: '18 Jul 2026' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Blog Overview & Analytics</h2>

      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Total Published Posts</div>
          <div style={styles.statNumber}>142</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Monthly Visitors</div>
          <div style={styles.statNumber}>84.2k</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Pending Comments</div>
          <div style={styles.statNumber}>18</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Active Writers</div>
          <div style={styles.statNumber}>9</div>
        </div>
      </div>

      <div style={styles.recentSection}>
        <h3 style={styles.subHeading}>Top Performing Recent Posts</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Article Title</th>
              <th style={styles.th}>Total Views</th>
              <th style={styles.th}>Publish Date</th>
            </tr>
          </thead>
          <tbody>
            {recentPosts.map((p) => (
              <tr key={p.id}>
                <td style={styles.td}>{p.id}</td>
                <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{p.title}</td>
                <td style={{ ...styles.td, color: '#0284c7', fontWeight: '600' }}>{p.views}</td>
                <td style={styles.td}>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Blog;