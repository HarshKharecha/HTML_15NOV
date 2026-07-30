import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarNavLink() {
    const styles = {
        nav: { display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', backgroundColor: '#0f172a', borderRadius: '8px', margin: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#38bdf8' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600',
            borderBottom: isActive ? '2px solid #38bdf8' : '2px solid transparent',
            paddingBottom: '4px'
        }),
        getMoreStyle: ({ isActive }) => ({
            color: isActive ? '#38bdf8' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600',
            borderBottom: isActive ? '2px solid #38bdf8' : '2px solid transparent',
            paddingBottom: '1px',
            fontSize: '2rem'
        })
    };

    return (
        <nav style={styles.nav}>
            <NavLink to="/" style={styles.getLinkStyle}>Home</NavLink>
            <NavLink to="/about" style={styles.getLinkStyle}>About</NavLink>
            <NavLink to="/contact" style={styles.getLinkStyle}>Contact</NavLink>
            <NavLink to="/companyhome" style={styles.getLinkStyle}>CompanyHome</NavLink>
            <NavLink to="/login" style={styles.getLinkStyle}>Login</NavLink>
            <NavLink to="/dashboard" style={styles.getLinkStyle}>Dashboard</NavLink>
            <NavLink to="/admin" style={styles.getLinkStyle}>Admin</NavLink>
            <NavLink to="/student" style={styles.getLinkStyle}>StudentDashboard</NavLink>
            <NavLink to="/employee" style={styles.getLinkStyle}>EmployeeDashboard</NavLink>
        </nav>
    );
}

export default NavbarNavLink;