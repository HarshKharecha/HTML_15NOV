import React from 'react';

function Comments() {
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
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#0f172a',
      margin: '0 0 6px 0'
    },
    commentText: {
      fontSize: '0.875rem',
      color: '#475569',
      fontStyle: 'italic',
      margin: '8px 0'
    },
    text: {
      fontSize: '0.75rem',
      color: '#64748b',
      margin: '2px 0'
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px',
      marginTop: '14px'
    },
    approveButton: {
      flex: 1,
      backgroundColor: '#166534',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '6px 12px',
      fontWeight: '600',
      fontSize: '0.8rem',
      cursor: 'pointer'
    },
    deleteButton: {
      flex: 1,
      backgroundColor: '#991b1b',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '6px 12px',
      fontWeight: '600',
      fontSize: '0.8rem',
      cursor: 'pointer'
    }
  };

  const commentsList = [
    { id: 'COM-01', user: 'Alex Rivers', post: 'Getting Started with React 19', text: 'Great breakdown! Loved the explanation of actions.', date: '26 Jul 2026' },
    { id: 'COM-02', user: 'Sam Lee', post: 'Top Design Systems in 2026', text: 'Does this cover dark mode variables as well?', date: '25 Jul 2026' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Moderation & Comments</h2>
      <div style={styles.grid}>
        {commentsList.map((c) => (
          <div key={c.id} style={styles.card}>
            <div>
              <h4 style={styles.title}>💬 {c.user}</h4>
              <p style={styles.text}><strong>Article:</strong> {c.post}</p>
              <p style={styles.commentText}>"{c.text}"</p>
              <p style={styles.text}>{c.date}</p>
            </div>
            <div style={styles.buttonGroup}>
              <button
                style={styles.approveButton}
                onClick={() => alert(`Approved comment from ${c.user}`)}
              >
                Approve
              </button>
              <button
                style={styles.deleteButton}
                onClick={() => alert(`Deleted comment from ${c.user}`)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;