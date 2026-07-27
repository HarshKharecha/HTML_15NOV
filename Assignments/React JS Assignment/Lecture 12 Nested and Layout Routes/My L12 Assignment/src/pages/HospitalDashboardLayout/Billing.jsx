import React from 'react';

function Billing() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      margin: '20px',
      padding: '24px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      border: '1px solid #e2e8f0'
    },
    heading: {
      color: '#0f172a',
      marginBottom: '20px',
      fontSize: '1.5rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '16px'
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)',
      transition: 'all 0.2s'
    },
    info: {
      margin: '9px auto'
    },
    name: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: 0
    },
    text: {
      fontSize: '0.9rem',
      color: '#64748b',
      margin: '4px 0'
    },
    button: {
      width: '100%',
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      margin: '9px auto',
      padding: '10px 16px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'background-color 0.2s'
    }
  };

  const invoices = [
    { id: 'INV-1001', patientName: 'Ananya Mehta', service: 'Cardiology Consultation', amount: '₹2,500', status: 'Paid' },
    { id: 'INV-1002', patientName: 'Vikram Joshi', service: 'Blood Tests & Lab Checkup', amount: '₹1,800', status: 'Paid' },
    { id: 'INV-1003', patientName: 'Kavita Singh', service: 'MRI Brain Scan', amount: '₹8,500', status: 'Unpaid' },
    { id: 'INV-1004', patientName: 'Rahul Sen', service: 'Surgical ICU Stay (3 days)', amount: '₹45,000', status: 'Pending Insurance' },
    { id: 'INV-1005', patientName: 'Meera Rao', service: 'Dermatology Follow-up', amount: '₹1,200', status: 'Paid' }
  ];

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Billing & Invoices</h2>
      <div style={styles.grid}>
        {invoices.map((inv) => (
          <div key={inv.id} style={styles.card}>
            <div style={styles.info}>
              <h4 style={styles.name}>{inv.patientName}</h4>
              <p style={styles.text}><strong>Invoice ID:</strong> {inv.id}</p>
              <p style={styles.text}><strong>Service:</strong> {inv.service}</p>
              <p style={styles.text}><strong>Amount:</strong> {inv.amount}</p>
              <p style={styles.text}>
                <strong>Status:</strong>{' '}
                <span style={{ 
                  color: inv.status === 'Paid' ? '#16a34a' : inv.status === 'Unpaid' ? '#dc2626' : '#d97706', 
                  fontWeight: 'bold' 
                }}>
                  {inv.status}
                </span>
              </p>
            </div>
            <button
              style={styles.button}
              onClick={() => alert(`Downloading Invoice ${inv.id} for ${inv.patientName}`)}
            >
              Download Invoice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Billing;