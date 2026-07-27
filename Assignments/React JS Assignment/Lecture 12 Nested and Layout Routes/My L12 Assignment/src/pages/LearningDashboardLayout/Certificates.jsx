import React from 'react';

function Certificates() {
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
      backgroundColor: '#166534',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '14px'
    }
  };

  const certificateList = [
    {
      id: 'CRT-8812',
      course: 'Frontend Engineering with React',
      issuedDate: '15 Jun 2026',
      grade: 'Grade A+'
    },
    {
      id: 'CRT-9014',
      course: 'Database Management Systems',
      issuedDate: '10 Mar 2026',
      grade: 'Grade A'
    }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Earned Certificates</h2>
      <div style={styles.grid}>
        {certificateList.map((cert) => (
          <div key={cert.id} style={styles.card}>
            <div>
              <h4 style={styles.title}>🏅 {cert.course}</h4>
              <p style={styles.text}><strong>Cert ID:</strong> {cert.id}</p>
              <p style={styles.text}><strong>Issued Date:</strong> {cert.issuedDate}</p>
              <p style={styles.text}><strong>Achievement:</strong> {cert.grade}</p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Downloading Certificate ID: ${cert.id}`)}
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;