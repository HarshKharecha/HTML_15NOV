import React, { use } from 'react';

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center'
  },
  value: { fontSize: '1.5rem', fontWeight: 'bold', color: '#38bdf8', margin: '0.5rem 0 0 0' }
};

function StatsPanel({ resourcePromise, totalTasks }) {
  // Experimental use() hook suspends until the promise resolves
  const systemData = use(resourcePromise);

  return (
    <div style={styles.grid}>
      <div style={styles.card}>
        <span style={{ color: '#94a3b8' }}>Total Tasks</span>
        <h2 style={styles.value}>{totalTasks}</h2>
      </div>
      <div style={styles.card}>
        <span style={{ color: '#94a3b8' }}>🔔 Server Uptime</span>
        <h2 style={styles.value}>{systemData.serverUptime}</h2>
      </div>
      <div style={styles.card}>
        <span style={{ color: '#94a3b8' }}>⚡Active Users</span>
        <h2 style={styles.value}>{systemData.activeUsers}</h2>
      </div>
    </div>
  );
}

export default StatsPanel;