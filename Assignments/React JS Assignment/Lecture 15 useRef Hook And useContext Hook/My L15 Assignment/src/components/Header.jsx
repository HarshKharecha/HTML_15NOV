import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme, colors } = useContext(ThemeContext);

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: colors.bgSecondary,
      borderBottom: `1px solid ${colors.border}`,
      color: colors.textPrimary,
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: colors.accent,
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    userBox: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    avatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'top',
      backgroundColor: colors.border,
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    userName: {
      fontSize: '0.875rem',
      fontWeight: '600',
    },
    userRole: {
      fontSize: '0.75rem',
      color: colors.textSecondary,
    },
    button: {
      padding: '0.4rem 0.8rem',
      borderRadius: '6px',
      border: `1px solid ${colors.border}`,
      backgroundColor: 'transparent',
      color: colors.textPrimary,
      cursor: 'pointer',
      fontSize: '0.85rem',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Troopy Dashboard</div>
      <div style={styles.actions}>
        <button style={styles.button} onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        {user && (
          <div style={styles.userBox}>
            <img src={user.avatar} alt="User Avatar" style={styles.avatar} />
            <div style={styles.userInfo}>
              <span style={styles.userName}>{user.username}</span>
              <span style={styles.userRole}>{user.role}</span>
            </div>
            <button style={styles.button} onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;