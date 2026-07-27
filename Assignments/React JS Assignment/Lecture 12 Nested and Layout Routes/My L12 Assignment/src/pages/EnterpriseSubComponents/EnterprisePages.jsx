import React from 'react';

export function EnterpriseHome() {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
      marginTop: '16px'
    },
    card: {
      padding: '16px',
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      textAlign: 'center'
    },
    num: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#4f46e5',
      margin: '4px 0'
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a' }}>
        Enterprise Overview (Index Page)
      </h2>
      <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
        Welcome back! Here is a high-level summary of system operations.
      </p>
      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Active Users</div>
          <div style={styles.num}>14,250</div>
        </div>
        <div style={styles.card}>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Stock Items</div>
          <div style={styles.num}>3,890</div>
        </div>
        <div style={styles.card}>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Pending Orders</div>
          <div style={styles.num}>128</div>
        </div>
        <div style={styles.card}>
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>System Uptime</div>
          <div style={styles.num}>99.98%</div>
        </div>
      </div>
    </div>
  );
}

export function EnterpriseUsers() {
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a' }}>User Management</h2>
      <p style={{ color: '#64748b' }}>List of enterprise staff accounts, roles, and authorization keys.</p>
    </div>
  );
}

export function EnterpriseProducts() {
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a' }}>Product Directory</h2>
      <p style={{ color: '#64748b' }}>Catalog of physical goods, global SKUs, and distribution points.</p>
    </div>
  );
}

export function EnterpriseOrders() {
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a' }}>Order Processing</h2>
      <p style={{ color: '#64748b' }}>Monitor customer shipments, fulfillments, and active dispatches.</p>
    </div>
  );
}

export function EnterpriseReports() {
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a' }}>Enterprise Analytics</h2>
      <p style={{ color: '#64748b' }}>View quarterly revenue statements, performance metrics, and logs.</p>
    </div>
  );
}

export function EnterpriseSettings() {
  return (
    <div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a' }}>System Settings</h2>
      <p style={{ color: '#64748b' }}>Global API keys, database connection pooling, and security options.</p>
    </div>
  );
}