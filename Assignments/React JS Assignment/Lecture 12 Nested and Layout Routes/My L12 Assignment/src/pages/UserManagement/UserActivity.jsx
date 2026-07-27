import React from 'react';

function UserActivity() {
  const styles = {
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    item: {
      padding: '12px 16px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.9rem'
    },
    action: {
      color: '#0f172a',
      fontWeight: '500'
    },
    time: {
      color: '#94a3b8',
      fontSize: '0.8rem'
    }
  };

  const activities = [
    { id: 1, action: 'Updated profile picture', time: '10 mins ago' },
    { id: 2, action: 'Changed security settings', time: '2 hours ago' },
    { id: 3, action: 'Logged in from new device', time: '1 day ago' }
  ];

  return (
    <div>
      <h3 style={{ marginBottom: '16px' }}>📜 Recent Activity</h3>
      <ul style={styles.list}>
        {activities.map((item) => (
          <li key={item.id} style={styles.item}>
            <span style={styles.action}>{item.action}</span>
            <span style={styles.time}>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserActivity;