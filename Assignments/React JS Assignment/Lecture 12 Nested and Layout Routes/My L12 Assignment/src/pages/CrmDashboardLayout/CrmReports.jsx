import React from 'react';

function CrmReports() {
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f8fafc',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    title: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f172a',
      margin: '0 0 6px 0'
    },
    text: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: '4px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '14px'
    }
  };

  const reportsList = [
    { id: 'REP-01', title: 'Monthly Revenue Forecast', category: 'Finance', lastGenerated: '26 Jul 2026' },
    { id: 'REP-02', title: 'Lead Conversion Analytics', category: 'Sales', lastGenerated: '20 Jul 2026' },
    { id: 'REP-03', title: 'Customer Churn & Retention', category: 'Customer Success', lastGenerated: '15 Jul 2026' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Analytics & Reports</h2>
      <div style={styles.grid}>
        {reportsList.map((rep) => (
          <div key={rep.id} style={styles.card}>
            <div>
              <h4 style={styles.title}>📈 {rep.title}</h4>
              <p style={styles.text}><strong>Category:</strong> {rep.category}</p>
              <p style={styles.text}><strong>Last Updated:</strong> {rep.lastGenerated}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Exporting report: ${rep.title}`)}
            >
              Export CSV / PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrmReports;