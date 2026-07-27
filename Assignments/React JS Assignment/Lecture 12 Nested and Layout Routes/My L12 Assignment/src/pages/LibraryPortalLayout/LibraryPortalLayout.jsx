import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function LibraryPortalLayout() {
  const styles = {
    layoutContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f8fafc'
    },
    header: {
      height: '64px',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 10
    },
    brand: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#38bdf8',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    headerActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      fontSize: '0.9rem',
      color: '#94a3b8'
    },
    mainBody: {
      display: 'flex',
      flex: 1
    },
    sidebar: {
      width: '240px',
      backgroundColor: '#1e293b',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      color: '#94a3b8',
      textDecoration: 'none',
      borderRadius: '8px',
      fontWeight: '500',
      fontSize: '0.95rem',
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
    <div style={styles.layoutContainer}>
      {/* Shared Header */}
      <header style={styles.header}>
        <div style={styles.brand}>📚 Alexandria Library Portal</div>
        <div style={styles.headerActions}>
          <span>Central Branch</span>
          <span>•</span>
          <span>System Admin</span>
        </div>
      </header>

      <div style={styles.mainBody}>
        {/* Shared Sidebar */}
        <aside style={styles.sidebar}>
          <NavLink
            to="books"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            📖 Books
          </NavLink>
          <NavLink
            to="authors"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            ✍️ Authors
          </NavLink>
          <NavLink
            to="categories"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            🗂️ Categories
          </NavLink>
          <NavLink
            to="members"
            style={({ isActive }) => ({
              ...styles.link,
              ...(isActive ? styles.activeLink : {})
            })}
          >
            👥 Members
          </NavLink>
        </aside>

        {/* Dynamic Nested Content */}
        <main style={styles.contentArea}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default LibraryPortalLayout;