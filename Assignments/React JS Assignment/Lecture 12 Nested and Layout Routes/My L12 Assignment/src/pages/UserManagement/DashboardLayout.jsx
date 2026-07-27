import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function DashboardLayout() {
  const styles = {
    container: {
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f8fafc',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
      padding: '0 24px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    brand: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#38bdf8'
    },
    nav: {
      display: 'flex',
      gap: '16px'
    },
    navLink: (isActive) => ({
      color: isActive ? '#38bdf8' : '#94a3b8',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.95rem',
      padding: '6px 12px',
      borderRadius: '6px',
      backgroundColor: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
      transition: 'all 0.2s ease'
    }),
    main: {
      flex: 1,
      maxWidth: '1200px',
      width: '100%',
      margin: '24px auto',
      padding: '0 16px',
      boxSizing: 'border-box'
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.brand}>📊 Enterprise App</div>
        <nav style={styles.nav}>
          <NavLink
            to="/more/usermanagement/"
            style={({ isActive }) => styles.navLink(isActive)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/more/usermanagement/users"
            style={({ isActive }) => styles.navLink(isActive)}
          >
            Users Section
          </NavLink>
        </nav>
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;