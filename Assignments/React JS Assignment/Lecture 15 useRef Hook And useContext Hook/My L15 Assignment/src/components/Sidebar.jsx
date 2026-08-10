import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

function Sidebar() {
  const { colors } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const styles = {
    sidebar: {
      width: '240px',
      backgroundColor: colors.bgSecondary,
      borderRight: `1px solid ${colors.border}`,
      padding: '1.5rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      color: colors.textPrimary,
    },
    navItem: {
      padding: '0.75rem 1rem',
      borderRadius: '6px',
      backgroundColor: colors.accent + '15',
      color: colors.accent,
      fontWeight: '600',
    },
    statusCard: {
      marginTop: 'auto',
      padding: '1rem',
      borderRadius: '8px',
      backgroundColor: colors.bgPrimary,
      fontSize: '0.85rem',
      border: `1px solid ${colors.border}`,
    },
    starus: {
      fontWeight: '600',
      color: '#16a34a',
    }
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.navItem}>📊 Dashboard Overview</div>
      <div style={styles.statusCard}>
        <strong>System Status</strong>
        <p style={{ margin: '0.5rem 0 0', color: colors.textSecondary }}>
          <span style={styles.starus}>Active User:</span> {user ? user.username : 'Guest'}
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;