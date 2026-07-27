import React from 'react';

function PerformanceReviews() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '16px'
    },
    card: {
      backgroundColor: '#f8fafc',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      padding: '20px'
    },
    employeeName: {
      fontSize: '1.05rem',
      fontWeight: '700',
      color: '#0f172a',
      margin: '0 0 6px 0'
    },
    text: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: '4px 0'
    },
    rating: {
      fontSize: '0.9rem',
      fontWeight: '700',
      color: '#0284c7',
      margin: '8px 0'
    }
  };

  const reviews = [
    { id: 1, name: 'Sarah Jenkins', cycle: 'Q2 2026', rating: '4.8 / 5.0', reviewer: 'Tech Director' },
    { id: 2, name: 'Michael Vance', cycle: 'Q2 2026', rating: '4.5 / 5.0', reviewer: 'Lead Design VP' },
    { id: 3, name: 'Priya Sharma', cycle: 'Q2 2026', rating: '4.9 / 5.0', reviewer: 'Chief People Officer' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Performance Appraisals</h2>
      <div style={styles.grid}>
        {reviews.map((r) => (
          <div key={r.id} style={styles.card}>
            <h4 style={styles.employeeName}>{r.name}</h4>
            <p style={styles.text}><strong>Cycle:</strong> {r.cycle}</p>
            <p style={styles.rating}>⭐ Score: {r.rating}</p>
            <p style={styles.text}><strong>Reviewer:</strong> {r.reviewer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerformanceReviews;