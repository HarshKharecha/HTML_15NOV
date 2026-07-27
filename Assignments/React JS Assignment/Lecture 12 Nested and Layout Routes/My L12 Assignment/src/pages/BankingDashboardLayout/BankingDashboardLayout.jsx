import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function BankingDashboardLayout() {
  const styles = {
    dashboardContainer: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f8fafc',
      margin: 0
    },
    sidebar: {
      width: '260px',
      backgroundColor: '#090d16',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      boxShadow: '4px 0 10px rgba(0, 0, 0, 0.05)'
    },
    sidebarBrand: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '32px',
      paddingLeft: '12px',
      color: '#10b981',
      letterSpacing: '0.5px'
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      color: '#94a3b8',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '500',
      transition: 'all 0.2s ease'
    },
    activeLink: {
      backgroundColor: '#059669',
      color: '#ffffff'
    },
    contentArea: {
      flex: 1,
      padding: '32px',
      overflowY: 'auto'
    }
  };

  return (
    <div style={styles.dashboardContainer}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarBrand}>💳 Apex Global Bank</div>
        <nav style={styles.navLinks}>
          <NavLink
            to="account"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Account
          </NavLink>
          <NavLink
            to="transactions"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Transactions
          </NavLink>
          <NavLink
            to="cards"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Cards
          </NavLink>
          <NavLink
            to="loans"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Loans
          </NavLink>
          <NavLink
            to="profile"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Profile
          </NavLink>
        </nav>
      </aside>
      <main style={styles.contentArea}>
        <Outlet />
      </main>
    </div>
  );
}

export default BankingDashboardLayout;