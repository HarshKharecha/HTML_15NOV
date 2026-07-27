import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function HrLayout() {
  const styles = {
    container: {
      display: 'flex',
      minHeight: '600px',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    sidebar: {
      width: '240px',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flexShrink: 0
    },
    sidebarTitle: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#38bdf8',
      marginBottom: '16px',
      paddingLeft: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    navLink: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 12px',
      borderRadius: '6px',
      color: isActive ? '#ffffff' : '#94a3b8',
      backgroundColor: isActive ? '#1e293b' : 'transparent',
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
        <div style={styles.sidebarTitle}>👥 HR Portal</div>
        
        <NavLink
          to="/more/hrportal/dashboard"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          📊 HR Dashboard
        </NavLink>
        <NavLink
          to="/more/hrportal/records"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          🗂️ Employee Records
        </NavLink>
        <NavLink
          to="/more/hrportal/leave"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          📅 Leave Management
        </NavLink>
        <NavLink
          to="/more/hrportal/payroll"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          💰 Payroll
        </NavLink>
        <NavLink
          to="/more/hrportal/performance"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          ⭐ Performance Reviews
        </NavLink>
      </aside>

      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default HrLayout;