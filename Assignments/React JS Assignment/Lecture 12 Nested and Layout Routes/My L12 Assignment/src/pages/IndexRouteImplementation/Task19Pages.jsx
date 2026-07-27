import React from 'react';

export function Task19Home() {
  const styles = {
    card: {
      padding: '20px',
      backgroundColor: '#f0fdf4',
      border: '1px solid #bbf7d0',
      borderRadius: '8px',
      color: '#166534'
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px' }}>
        Dashboard Home (Default Index Route)
      </h2>
      <div style={styles.card}>
        <p style={{ margin: 0, fontWeight: '600' }}>
          ✅ Index Route Active
        </p>
        <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem' }}>
          This view loaded automatically when accessing the parent layout path without specifying a sub-route.
        </p>
      </div>
    </div>
  );
}

export function Task19Users() {
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px' }}>Users View</h2>
      <p style={{ color: '#64748b' }}>Manage registered system accounts and permissions here.</p>
    </div>
  );
}

export function Task19Products() {
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px' }}>Products View</h2>
      <p style={{ color: '#64748b' }}>Browse active product inventory and stock levels.</p>
    </div>
  );
}

export function Task19Settings() {
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px' }}>Settings View</h2>
      <p style={{ color: '#64748b' }}>Configure application preferences and portal parameters.</p>
    </div>
  );
}