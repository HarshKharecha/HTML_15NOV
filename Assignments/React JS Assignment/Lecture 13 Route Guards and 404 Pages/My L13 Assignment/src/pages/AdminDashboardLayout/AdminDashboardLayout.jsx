import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

function AdminDashboardLayout() {
  const navigate = useNavigate();

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
      boxShadow: '4px 0 6px -1px rgba(0, 0, 0, 0.05)',
      boxSizing: 'border-box'
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
      gap: '8px',
      flex: 1
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
    },
    button: {
      width: '100%',
      backgroundColor: '#ef4444',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      padding: '10px 16px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: 'auto',
      transition: 'background-color 0.2s ease'
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Persistent Sidebar Component */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarBrand}>Admin Portal</div>
        <nav style={styles.navLinks}>
          <NavLink
            to="users"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Users
          </NavLink>
          <NavLink
            to="products"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Products
          </NavLink>
          <NavLink
            to="orders"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Orders
          </NavLink>
          <NavLink
            to="reports"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            Reports
          </NavLink>
        </nav>

        {/* Logout Button */}
        <button style={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content Area where Nested Routes Render */}
      <main style={styles.contentArea}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboardLayout;