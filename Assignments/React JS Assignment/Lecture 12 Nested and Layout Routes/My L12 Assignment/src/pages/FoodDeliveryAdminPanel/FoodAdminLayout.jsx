import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function FoodAdminLayout() {
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
      color: '#f97316',
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
      borderLeft: isActive ? '4px solid #f97316' : '4px solid transparent',
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
        <div style={styles.sidebarTitle}>🍔 FoodEats Admin</div>

        <NavLink
          to="/more/foodadmin/orders"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          📦 Orders
        </NavLink>
        <NavLink
          to="/more/foodadmin/restaurants"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          🏪 Restaurants
        </NavLink>
        <NavLink
          to="/more/foodadmin/partners"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          🛵 Delivery Partners
        </NavLink>
        <NavLink
          to="/more/foodadmin/customers"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          👥 Customers
        </NavLink>
        <NavLink
          to="/more/foodadmin/reports"
          style={({ isActive }) => styles.navLink(isActive)}
        >
          📈 Reports
        </NavLink>
      </aside>

      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default FoodAdminLayout;