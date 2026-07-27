import React from 'react';

function FoodReports() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '28px'
    },
    statCard: {
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center'
    },
    statNum: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#f97316',
      margin: '4px 0'
    },
    statLabel: {
      fontSize: '0.85rem',
      color: '#64748b'
    },
    section: {
      backgroundColor: '#f8fafc',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '16px'
    },
    itemRow: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid #e2e8f0',
      fontSize: '0.9rem',
      color: '#334155'
    }
  };

  return (
    <div>
      <h2 style={styles.heading}>Performance Reports</h2>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Daily Revenue</div>
          <div style={styles.statNum}>₹7,00,000.00</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Total Orders Today</div>
          <div style={styles.statNum}>342</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Avg Delivery Time</div>
          <div style={styles.statNum}>26 min</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>Cancellation Rate</div>
          <div style={styles.statNum}>1.2%</div>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginTop: 0, marginBottom: '12px' }}>
          Top Selling Items Today
        </h3>
        <div style={styles.itemRow}>
          <span><strong>1. Cheeseburger Deluxe</strong> — Burger Bistro</span>
          <span style={{ fontWeight: '600', color: '#f97316' }}>128 orders</span>
        </div>
        <div style={styles.itemRow}>
          <span><strong>2. Pepperoni Feast Pizza</strong> — Pizza Palace</span>
          <span style={{ fontWeight: '600', color: '#f97316' }}>95 orders</span>
        </div>
        <div style={styles.itemRow}>
          <span><strong>3. California Dragon Roll</strong> — Sushi Central</span>
          <span style={{ fontWeight: '600', color: '#f97316' }}>74 orders</span>
        </div>
      </div>
    </div>
  );
}

export default FoodReports;