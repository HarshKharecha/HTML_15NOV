import React from 'react';

function Payroll() {
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
    badge: {
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#15803d',
      backgroundColor: '#dcfce7'
    },
    button: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '6px 12px',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer'
    }
  };

  const payrolls = [
    { id: 'PAY-07', month: 'July 2026', employee: 'Sarah Jenkins', salary: '$9,500', status: 'Processed' },
    { id: 'PAY-08', month: 'July 2026', employee: 'Michael Vance', salary: '$8,200', status: 'Processed' },
    { id: 'PAY-09', month: 'July 2026', employee: 'Priya Sharma', salary: '$8,800', status: 'Processed' }
  ];

  return (
    <div>
      <h2 style={styles.heading}>Payroll Summaries & Payslips</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Payroll Ref</th>
            <th style={styles.th}>Period</th>
            <th style={styles.th}>Employee</th>
            <th style={styles.th}>Net Pay</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Payslip</th>
          </tr>
        </thead>
        <tbody>
          {payrolls.map((p) => (
            <tr key={p.id}>
              <td style={styles.td}>{p.id}</td>
              <td style={styles.td}>{p.month}</td>
              <td style={{ ...styles.td, fontWeight: '600', color: '#0f172a' }}>{p.employee}</td>
              <td style={{ ...styles.td, color: '#0284c7', fontWeight: '600' }}>{p.salary}</td>
              <td style={styles.td}>
                <span style={styles.badge}>{p.status}</span>
              </td>
              <td style={styles.td}>
                <button
                  style={styles.button}
                  onClick={() => alert(`Downloading payslip for ${p.employee}`)}
                >
                  Download PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Payroll;