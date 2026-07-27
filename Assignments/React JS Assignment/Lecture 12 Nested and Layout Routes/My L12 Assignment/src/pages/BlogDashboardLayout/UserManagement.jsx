import React from 'react';

function UserManagement() {
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
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: '0.9rem'
    },
    th: {
      backgroundColor: '#f1f5f9',
      color: '#334155',
      textAlign: 'left',
      padding: '12px',
      borderBottom: '2px solid #e2e8f0'
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #e2e8f0',
      color: '#475569'
    },
    roleBadge: (role) => ({
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: role === 'Admin' ? '#1e40af' : role === 'Editor' ? '#166534' : '#854d0e',
      backgroundColor: role === 'Admin' ? '#dbeafe' : role === 'Editor' ? '#dcfce7' : '#fef9c3'
    }),
    button: {
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '6px 12px',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  };

  const usersList = [
    { id: 'USR-01', name: 'Alex Morgan', email: 'alex@techpulse.io', role: 'Admin', postsCount: 34 },
    { id: 'USR-02', name: 'Jane Doe', email: 'jane@techpulse.io', role: 'Editor', postsCount: 18 },
    { id: 'USR-03', name: 'Mark Smith', email: 'mark@techpulse.io', role: 'Contributor', postsCount: 5 }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Authors & User Roles</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>User</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Articles Published</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((u) => (
            <tr key={u.id}>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{u.name}</td>
              <td style={styles.td}>{u.email}</td>
              <td style={styles.td}>
                <span style={styles.roleBadge(u.role)}>{u.role}</span>
              </td>
              <td style={styles.td}>{u.postsCount}</td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Managing permissions for ${u.name}`)}
                >
                  Manage Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;