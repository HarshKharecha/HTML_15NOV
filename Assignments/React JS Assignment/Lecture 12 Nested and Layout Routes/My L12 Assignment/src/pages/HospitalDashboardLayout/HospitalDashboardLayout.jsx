import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function HospitalDashboardLayout() {
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
      backgroundColor: '#0f172a',
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
      color: '#0284c7',
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
      backgroundColor: '#0284c7',
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
        <div style={styles.sidebarBrand}>🏥 HealthCare Portal</div>
        <nav style={styles.navLinks}>
          <NavLink
            to="patients"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Patients
          </NavLink>
          <NavLink
            to="doctors"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Doctors
          </NavLink>
          <NavLink
            to="appointments"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Appointments
          </NavLink>
          <NavLink
            to="billing"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Billing
          </NavLink>
        </nav>
      </aside>
      <main style={styles.contentArea}>
        <Outlet />
      </main>
    </div>
  );
}

export default HospitalDashboardLayout;