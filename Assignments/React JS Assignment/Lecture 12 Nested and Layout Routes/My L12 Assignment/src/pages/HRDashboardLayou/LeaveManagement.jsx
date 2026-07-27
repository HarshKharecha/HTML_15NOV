import React from 'react';

function LeaveManagement() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px'
    },
    card: {
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    name: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#0f172a',
      margin: '0 0 4px 0'
    },
    meta: {
      fontSize: '0.85rem',
      color: '#64748b',
      margin: '2px 0'
    },
    btnGroup: {
      display: 'flex',
      gap: '8px',
      marginTop: '16px'
    },
    approveBtn: {
      flex: 1,
      backgroundColor: '#166534',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px',
      fontWeight: '600',
      fontSize: '0.8rem',
      cursor: 'pointer'
    },
    rejectBtn: {
      flex: 1,
      backgroundColor: '#991b1b',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '8px',
      fontWeight: '600',
      fontSize: '0.8rem',
      cursor: 'pointer'
    }
  };

  const requests = [
    { id: 'LV-01', name: 'Daniel Kim', type: 'Casual Leave', dates: 'Jul 29 - Jul 30 (2 days)', reason: 'Family event' },
    { id: 'LV-02', name: 'Elena Rostova', type: 'Sick Leave', dates: 'Aug 01 - Aug 03 (3 days)', reason: 'Medical recovery' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Pending Leave Requests</h2>
      <div style={styles.grid}>
        {requests.map((r) => (
          <div key={r.id} style={styles.card}>
            <div>
              <h4 style={styles.name}>{r.name}</h4>
              <p style={styles.meta}><strong>Type:</strong> {r.type}</p>
              <p style={styles.meta}><strong>Duration:</strong> {r.dates}</p>
              <p style={styles.meta}><strong>Reason:</strong> {r.reason}</p>
            </div>
            <div style={styles.btnGroup}>
              <button
                style={styles.approveBtn}
                onClick={() => alert(`Approved leave for ${r.name}`)}
              >
                Approve
              </button>
              <button
                style={styles.rejectBtn}
                onClick={() => alert(`Rejected leave for ${r.name}`)}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaveManagement;