import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function EmployeeDashboardLayout() {
  const styles = {
    dashboardContainer: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f1f5f9',
      margin: 0
    },
    sidebar: {
      width: '260px',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      boxShadow: '4px 0 6px -1px rgba(0, 0, 0, 0.05)'
    },
    sidebarBrand: {
      fontSize: '1.25rem',
      fontWeight: '700',
      marginBottom: '32px',
      paddingLeft: '12px',
      color: '#38bdf8',
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
      backgroundColor: '#2563eb',
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
        <div style={styles.sidebarBrand}>Employee Portal</div>
        <nav style={styles.navLinks}>
          <NavLink
            to="list"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Employee List
          </NavLink>
          <NavLink
            to="details"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Employee Details
          </NavLink>
          <NavLink
            to="attendance"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Attendance
          </NavLink>
          <NavLink
            to="salary"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Salary
          </NavLink>
        </nav>
      </aside>
      <main style={styles.contentArea}>
        <Outlet />
      </main>
    </div>
  );
}

export default EmployeeDashboardLayout;