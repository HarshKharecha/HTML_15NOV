import React from 'react';

const styles = {
  container: { padding: '1.5rem', flex: 1, color: '#fff' }
};

function Analytics() {
  return (
    <div style={styles.container}>
      <h2>Analytics & Activity Feed</h2>
      <p style={{ color: '#94a3b8' }}>Real-time performance metrics and audit trails.</p>
    </div>
  );
}

export default Analytics;