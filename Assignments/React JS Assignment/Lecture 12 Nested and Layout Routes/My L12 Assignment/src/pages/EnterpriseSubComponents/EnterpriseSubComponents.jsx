import React from 'react';
import { NavLink } from 'react-router-dom';

export function EnterpriseHeader() {
  const styles = {
    header: {
      height: '60px',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      borderBottom: '1px solid #1e293b'
    },
    title: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#6366f1'
    },
    userInfo: {
      fontSize: '0.875rem',
      color: '#94a3b8'
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.title}>🏢 Enterprise Operations Hub</div>
      <div style={styles.userInfo}>Logged in as: <strong>Admin User</strong></div>
    </header>
  );
}

export function EnterpriseSidebar() {
  const styles = {
    sidebar: {
      width: '240px',
      backgroundColor: '#1e293b',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      flexShrink: 0
    },
    navLink: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 12px',
      borderRadius: '6px',
      color: isActive ? '#ffffff' : '#94a3b8',
      backgroundColor: isActive ? '#312e81' : 'transparent',
      borderLeft: isActive ? '4px solid #6366f1' : '4px solid transparent',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.2s ease'
    })
  };

  return (
    <aside style={styles.sidebar}>
      <NavLink
        to="/more/task20"
        end
        style={({ isActive }) => styles.navLink(isActive)}
      >
        📊 Dashboard Home
      </NavLink>
      <NavLink
        to="/more/task20/users"
        style={({ isActive }) => styles.navLink(isActive)}
      >
        👥 Users
      </NavLink>
      <NavLink
        to="/more/task20/products"
        style={({ isActive }) => styles.navLink(isActive)}
      >
        📦 Products
      </NavLink>
      <NavLink
        to="/more/task20/orders"
        style={({ isActive }) => styles.navLink(isActive)}
      >
        🛒 Orders
      </NavLink>
      <NavLink
        to="/more/task20/reports"
        style={({ isActive }) => styles.navLink(isActive)}
      >
        📈 Reports
      </NavLink>
      <NavLink
        to="/more/task20/settings"
        style={({ isActive }) => styles.navLink(isActive)}
      >
        ⚙️ Settings
      </NavLink>
    </aside>
  );
}

export function EnterpriseFooter() {
  const styles = {
    footer: {
      height: '40px',
      backgroundColor: '#0f172a',
      color: '#64748b',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.8rem',
      borderTop: '1px solid #1e293b'
    }
  };

  return (
    <footer style={styles.footer}>
      © 2026 Enterprise Admin Portal. All Rights Reserved.
    </footer>
  );
}