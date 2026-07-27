import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function SchoolDashboardLayout() {
  const styles = {
    portalContainer: {
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#f8fafc',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      backgroundColor: '#1e1b4b',
      color: '#ffffff',
      padding: '0 32px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    brand: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#818cf8',
      letterSpacing: '0.5px'
    },
    navLinks: {
      display: 'flex',
      gap: '12px'
    },
    link: {
      padding: '8px 16px',
      color: '#c7d2fe',
      textDecoration: 'none',
      borderRadius: '6px',
      fontWeight: '500',
      fontSize: '0.95rem',
      transition: 'all 0.2s ease'
    },
    activeLink: {
      backgroundColor: '#4338ca',
      color: '#ffffff'
    },
    mainContent: {
      flex: 1,
      padding: '32px'
    }
  };

  return (
    <div style={styles.portalContainer}>
      <header style={styles.header}>
        <div style={styles.brand}>🎓 Academia School Portal</div>
        <nav style={styles.navLinks}>
          <NavLink
            to="students"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Students
          </NavLink>
          <NavLink
            to="teachers"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Teachers
          </NavLink>
          <NavLink
            to="subjects"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Subjects
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
        </nav>
      </header>
      <main style={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}

export default SchoolDashboardLayout;