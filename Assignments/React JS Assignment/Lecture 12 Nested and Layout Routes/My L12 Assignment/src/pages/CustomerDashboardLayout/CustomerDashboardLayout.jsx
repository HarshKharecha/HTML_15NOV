import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function CustomerDashboardLayout() {
  const styles = {
    layoutContainer: {
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#eaeded',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      backgroundColor: '#131921',
      color: '#ffffff',
      padding: '0 24px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    },
    brand: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#ff9900',
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      fontSize: '0.9rem',
      color: '#ffffff'
    },
    subNav: {
      backgroundColor: '#232f3e',
      padding: '0 24px',
      display: 'flex',
      gap: '8px',
      overflowX: 'auto'
    },
    link: {
      padding: '12px 16px',
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      borderBottom: '3px solid transparent',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap'
    },
    activeLink: {
      borderBottom: '3px solid #ff9900',
      color: '#ff9900',
      fontWeight: '700'
    },
    mainContent: {
      flex: 1,
      maxWidth: '1200px',
      width: '100%',
      margin: '24px auto',
      padding: '0 16px',
      boxSizing: 'border-box'
    }
  };

  return (
    <div style={styles.layoutContainer}>
      {/* Top Header Bar */}
      <header style={styles.header}>
        <div style={styles.brand}>🛒 store.com</div>
        <div style={styles.headerRight}>
          <span>Hello, Alex</span>
          <span>|</span>
          <span style={{ color: '#ff9900', fontWeight: 'bold' }}>Prime Member</span>
        </div>
      </header>

      {/* Sub Navigation Bar */}
      <nav style={styles.subNav}>
        <NavLink
          to="orders"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {})
          })}
        >
          Your Orders
        </NavLink>
        <NavLink
          to="wishlist"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {})
          })}
        >
          Wishlist
        </NavLink>
        <NavLink
          to="addresses"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {})
          })}
        >
          Your Addresses
        </NavLink>
        <NavLink
          to="profilec"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {})
          })}
        >
          Login & Security
        </NavLink>
        <NavLink
          to="settings"
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {})
          })}
        >
          Account Settings
        </NavLink>
      </nav>

      {/* Dynamic Main Section */}
      <main style={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}

export default CustomerDashboardLayout;