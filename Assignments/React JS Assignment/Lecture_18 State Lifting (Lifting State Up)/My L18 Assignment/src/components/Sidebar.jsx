import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
    sidebar: {
        width: '220px',
        backgroundColor: '#0f172a',
        padding: '1.5rem 1rem',
        minHeight: 'calc(100vh - 130px)',
    },
    nav: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    link: {
        color: '#94a3b8',
        textDecoration: 'none',
        padding: '0.75rem 1rem',
        borderRadius: '6px',
        transition: 'all 0.2s',
    },
    activeLink: { backgroundColor: '#1e293b', color: '#f8fafc' },
};

function Sidebar() {
    return (
        <aside style={styles.sidebar}>
            <nav style={styles.nav}>
                <NavLink to="/" style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}>
                    📊 Dashboard
                </NavLink>
                <NavLink to="/students" style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}>
                    👨‍🎓 Students
                </NavLink>
                <NavLink to="/courses" style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}>
                    📚 Courses
                </NavLink>
                <NavLink to="/context" style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}>
                    💡 Context Comparison
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;