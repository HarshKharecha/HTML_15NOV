import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ theme, windowSize }) {
    const isDark = theme === 'dark';
    const isMobile = windowSize.width < 768;

    const styles = {
        sidebar: {
            width: isMobile ? '100%' : '220px',
            backgroundColor: isDark ? '#111827' : '#ffffff',
            color: isDark ? '#f9fafb' : '#111827',
            padding: '1.5rem 1rem',
            borderRadius: '12px',
            borderRight: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            boxSizing: 'border-box'
        },
        list: { listStyle: 'none', padding: 0, margin: 0 },
        item: {
            padding: '0.75rem 0',
            borderBottom: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`
        },
        col: {
            color: '#2563eb'
        },
        link: (isActive) => ({
            color: 'inherit',
            textDecoration: 'none',
            display: 'block',
            fontWeight: isActive ? 'bold' : 'normal',
        }),
    };

    return (
        <aside style={styles.sidebar}>
            <ul style={styles.list}>
                <li style={styles.item}>
                    <NavLink to="/dashboard" style={({ isActive }) => ({...styles.link(isActive), ...styles.col})}>🏢 Dashboard</NavLink>
                </li>
                <li style={styles.item}>
                    <NavLink to="/employees" style={({ isActive }) => styles.link(isActive)}>👥 Employees</NavLink>
                </li>
                <li style={styles.item}>
                    <NavLink to="/settings" style={({ isActive }) => styles.link(isActive)}>⚙️ Settings <span style={{ fontSize: '0.75rem', opacity: 0.7, float: 'right' }}>(Future Plan)</span></NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;