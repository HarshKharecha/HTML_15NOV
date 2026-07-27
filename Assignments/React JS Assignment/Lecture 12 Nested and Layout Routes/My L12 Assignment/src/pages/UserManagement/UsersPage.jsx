import React from 'react';
import { Outlet, NavLink, useParams } from 'react-router-dom';

function UsersPage() {
  const { userId } = useParams();

  const styles = {
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    heading: {
      margin: '0 0 16px 0',
      color: '#0f172a',
      fontSize: '1.5rem'
    },
    subNav: {
      display: 'flex',
      gap: '8px',
      borderBottom: '2px solid #e2e8f0',
      paddingBottom: '12px',
      marginBottom: '24px'
    },
    subNavLink: (isActive) => ({
      color: isActive ? '#0284c7' : '#64748b',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '0.9rem',
      padding: '8px 16px',
      borderRadius: '6px',
      borderBottom: isActive ? '2px solid #0284c7' : '2px solid transparent',
      backgroundColor: isActive ? '#e0f2fe' : 'transparent',
      transition: 'all 0.2s ease'
    }),
    userBadge: {
      display: 'inline-block',
      backgroundColor: '#f1f5f9',
      color: '#475569',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.85rem',
      marginBottom: '16px'
    }
  };

  const activeUserId = userId || 'usr-101';

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>User Management</h2>
      <div style={styles.userBadge}>Active ID: <strong>{activeUserId}</strong></div>

      {/* Sub-navigation for Level 3 deep routes */}
      <nav style={styles.subNav}>
        <NavLink
          to={`/more/usermanagement/users/${activeUserId}/profile`}
          style={({ isActive }) => styles.subNavLink(isActive)}
        >
          Profile
        </NavLink>
        <NavLink
          to={`/more/usermanagement/users/${activeUserId}/settings`}
          style={({ isActive }) => styles.subNavLink(isActive)}
        >
          Settings
        </NavLink>
        <NavLink
          to={`/more/usermanagement/users/${activeUserId}/activity`}
          style={({ isActive }) => styles.subNavLink(isActive)}
        >
          Activity Log
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default UsersPage;