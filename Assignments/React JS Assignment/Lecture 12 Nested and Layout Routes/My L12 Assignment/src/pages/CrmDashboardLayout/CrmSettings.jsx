import React from 'react';

function CrmSettings() {
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
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
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
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '14px'
    }
  };

  const settingsOptions = [
    { id: 'SET-01', title: 'Team Permissions', status: '3 Admin, 12 Sales Reps' },
    { id: 'SET-02', title: 'Pipeline Stages', status: '5 Stages Active' },
    { id: 'SET-03', title: 'Email & Calendar Sync', status: 'Connected (Google Workspace)' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>CRM Configuration & Settings</h2>
      <div style={styles.grid}>
        {settingsOptions.map((set) => (
          <div key={set.id} style={styles.card}>
            <div>
              <h4 style={styles.title}>{set.title}</h4>
              <p style={styles.text}>{set.status}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Configuring ${set.title}`)}
            >
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrmSettings;