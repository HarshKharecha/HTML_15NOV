import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Task19Layout() {
  const styles = {
    container: {
      display: 'flex',
      minHeight: '550px',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    sidebar: {
      width: '230px',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flexShrink: 0
    },
    sidebarTitle: {
      fontSize: '1.05rem',
      fontWeight: '700',
      color: '#38bdf8',
      marginBottom: '16px',
      paddingLeft: '8px'
    },
    navLink: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 12px',
      borderRadius: '6px',
      color: isActive ? '#ffffff' : '#94a3b8',
      backgroundColor: isActive ? '#334155' : 'transparent',
      borderLeft: isActive ? '4px solid #38bdf8' : '4px solid transparent',
      textDecoration: 'none',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.2s ease'
    }),
    content: {
      flex: 1,
      padding: '24px',
      backgroundColor: '#ffffff',
      overflowY: 'auto'
    }
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarTitle}>📌 Index Route App</div>

        <NavLink
          to="/more/task19"
          end
          style={({ isActive }) => styles.navLink(isActive)}
        >
          🏠 Dashboard Home
        </NavLink>
        <NavLink
          to="/more/task19/users"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          👥 Users
        </NavLink>
        <NavLink
          to="/more/task19/products"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          📦 Products
        </NavLink>
        <NavLink
          to="/more/task19/settings"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          ⚙️ Settings
        </NavLink>
      </aside>

      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Task19Layout;