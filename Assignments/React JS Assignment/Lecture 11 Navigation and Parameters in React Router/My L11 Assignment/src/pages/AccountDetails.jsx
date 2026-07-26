import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function AccountDetails() {
  const { accountNumber } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const styles = {
    pageWrapper: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '20px',
      padding: '32px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    },
    backButton: {
      marginBottom: '24px',
      padding: '8px 16px',
      backgroundColor: '#f1f5f9',
      border: '1px solid #cbd5e1',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      color: '#334155',
      transition: 'background-color 0.2s ease'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    metaText: {
      fontSize: '0.85rem',
      fontWeight: '600',
      color: '#059669',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      margin: 0
    },
    heading: {
      color: '#0f172a',
      fontSize: '2rem',
      fontWeight: '800',
      margin: 0,
      lineHeight: '1.3'
    },
    divider: {
      border: 'none',
      borderTop: '1px solid #e2e8f0',
      margin: '8px 0 16px 0'
    },
    infoRow: {
      fontSize: '1.05rem',
      color: '#334155',
      lineHeight: '1.7',
      margin: 0
    },
    balanceBadge: {
      color: '#059669',
      fontWeight: 'bold',
      backgroundColor: '#ecfdf5',
      padding: '2px 8px',
      borderRadius: '6px'
    }
  };

  const accountsData = {
    'ACC987654': {
      holder: 'Jane Doe',
      type: 'Checking Account',
      balance: '$5,430.00',
      status: 'Active',
      branch: 'Main Street Branch'
    }
  };

  // Get account via router state first, fall back to dictionary lookup, or provide a default fallback mock if dynamic
  const account = location.state?.account || accountsData[accountNumber] || {
    holder: 'Valued Customer',
    type: 'Standard Bank Account',
    balance: '$1,200.00',
    status: 'Active',
    branch: 'Main Street Branch'
  };

  if (!account && !accountNumber) {
    return (
      <div style={{ ...styles.pageWrapper, textAlign: 'center' }}>
        <h2 style={{ color: '#dc2626' }}>Account Not Found</h2>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>No records found for Account Number: {accountNumber}</p>
        <button style={styles.backButton} onClick={() => navigate(-1)}>← Back to Account List</button>
      </div>
    );
  }

  return (
    <div style={styles.pageWrapper}>
      <button
        style={styles.backButton}
        onClick={() => navigate(-1)}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
      >
        ← Back to List
      </button>

      <div style={styles.contentContainer}>
        <p style={styles.metaText}>Account Number: {accountNumber}</p>
        <h2 style={styles.heading}>{account.type}</h2>
        <hr style={styles.divider} />
        <p style={styles.infoRow}><strong>Account Holder:</strong> {account.holder}</p>
        <p style={styles.infoRow}><strong>Branch:</strong> {account.branch}</p>
        <p style={styles.infoRow}><strong>Status:</strong> {account.status}</p>
        <p style={styles.infoRow}><strong>Balance:</strong> <span style={styles.balanceBadge}>{account.balance}</span></p>
      </div>
    </div>
  );
}

export default AccountDetails;