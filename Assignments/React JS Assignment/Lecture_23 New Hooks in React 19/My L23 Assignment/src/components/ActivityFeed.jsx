import React from 'react';

const styles = {
  container: {
    backgroundColor: '#1e293b',
    padding: '1.25rem',
    borderRadius: '8px',
    marginTop: '1.5rem'
  },
  title: { margin: '0 0 1rem 0', color: '#fff', fontSize: '1.1rem' },
  list: { display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem',
    backgroundColor: '#0f172a',
    borderRadius: '6px',
    borderLeft: '3px solid #38bdf8'
  },
  text: { margin: 0, color: '#e2e8f0', fontSize: '0.875rem' },
  time: { color: '#64748b', fontSize: '0.75rem' }
};

function ActivityFeed({ tasks }) {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Team Activity Feed</h3>
      <div style={styles.list}>
        {tasks.map((task) => (
          <div key={task.id} style={styles.item}>
            <div>
              <p style={styles.text}>
                <strong>Task Created:</strong> {task.title}
              </p>
            </div>
            <span style={styles.time}>{task.date || 'Just now'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;