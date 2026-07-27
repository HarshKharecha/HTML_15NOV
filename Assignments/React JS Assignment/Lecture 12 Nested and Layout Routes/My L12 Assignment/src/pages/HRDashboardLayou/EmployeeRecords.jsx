import React from 'react';

function EmployeeRecords() {
  const styles = {
    heading: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#0f172a',
      marginBottom: '20px'
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
    status: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#166534',
      backgroundColor: '#dcfce7'
    },
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

  const employees = [
    { id: 'EMP-101', name: 'Sarah Jenkins', role: 'Senior Software Engineer', dept: 'Engineering', status: 'Active' },
    { id: 'EMP-102', name: 'Michael Vance', role: 'Product Designer', dept: 'Design', status: 'Active' },
    { id: 'EMP-103', name: 'Priya Sharma', role: 'HR Business Partner', dept: 'People', status: 'Active' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Employee Directory & Records</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>EMP ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Department</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td style={styles.td}>{emp.id}</td>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{emp.name}</td>
              <td style={styles.td}>{emp.role}</td>
              <td style={styles.td}>{emp.dept}</td>
              <td style={styles.td}>
                <span style={styles.status}>{emp.status}</span>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Opening profile for ${emp.name}`)}
                >
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeRecords;