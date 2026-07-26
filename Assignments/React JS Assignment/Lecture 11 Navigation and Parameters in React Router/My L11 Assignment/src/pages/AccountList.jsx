import React from 'react';
import { useNavigate } from 'react-router-dom';

function AccountList() {
  const navigate = useNavigate();

  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '20px',
      padding: '32px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
    },
    headerSection: {
      marginBottom: '24px',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '16px'
    },
    heading: {
      color: '#0f172a',
      fontSize: '1.75rem',
      fontWeight: '700',
      margin: '0 0 8px 0'
    },
    subHeading: {
      color: '#64748b',
      fontSize: '0.95rem',
      margin: 0
    },
    accountCard: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer'
    },
    accountTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1e293b',
      margin: 0
    },
    accountDetailsText: {
      fontSize: '0.95rem',
      color: '#475569',
      margin: 0
    },
    viewButton: {
      alignSelf: 'flex-start',
      backgroundColor: '#059669',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 18px',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(5, 150, 105, 0.2)',
      transition: 'background-color 0.2s ease'
    }
  };

  const account = {
    accountNumber: 'ACC987654',
    holder: 'Jane Doe',
    type: 'Checking Account',
    balance: '$5,430.00',
    status: 'Active',
    branch: 'Main Street Branch'
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerSection}>
        <h2 style={styles.heading}>Bank Accounts</h2>
        <p style={styles.subHeading}>Manage your accounts, check balances, and view transaction history.</p>
      </div>

      <div
        style={styles.accountCard}
        onClick={() => navigate(`/account/${account.accountNumber}`, { state: { account } })}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#059669';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0px 10px 15px -3px rgba(5, 150, 105, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#e2e8f0';
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.02)';
        }}
      >
        <h3 style={styles.accountTitle}>{account.type}</h3>
        <p style={styles.accountDetailsText}><strong>Account Number:</strong> {account.accountNumber} | <strong>Holder:</strong> {account.holder}</p>
        <button
          style={styles.viewButton}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/account/${account.accountNumber}`, { state: { account } });
          }}
        >
          View Account →
        </button>
      </div>
    </div>
  );
}

export default AccountList;