import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  sidebar: {
    width: '220px',
    backgroundColor: '#0f172a',
    padding: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minHeight: 'calc(100vh - 60px)'
  },
  link: {
    color: '#94a3b8',
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    fontWeight: '500'
  },
  activeLink: {
    color: '#fff',
    backgroundColor: '#2563eb'
  }
};

function Sidebar() {
  return (
    <nav style={styles.sidebar}>
      <NavLink
        to="/"
        style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.activeLink : {}) })}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/analytics"
        style={({ isActive }) => ({ ...styles.link, ...(isActive ? styles.activeLink : {}) })}
      >
        Analytics
      </NavLink>
    </nav>
  );
}

export default Sidebar;