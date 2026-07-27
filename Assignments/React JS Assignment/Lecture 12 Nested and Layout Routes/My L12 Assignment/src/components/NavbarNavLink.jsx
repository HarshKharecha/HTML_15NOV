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
            <NavLink to="/companyhome" style={styles.getLinkStyle}>CompanyHome</NavLink>
            <NavLink to="/student" style={styles.getLinkStyle}>StudentDashboard</NavLink>
            <NavLink to="/admin" style={styles.getLinkStyle}>AdminDashboard</NavLink>
            <NavLink to="/employee" style={styles.getLinkStyle}>EmployeeDashboard</NavLink>
            <NavLink to="/hospital" style={styles.getLinkStyle}>HospitalDashboard</NavLink>
            <NavLink to="/school" style={styles.getLinkStyle}>SchoolDashboard</NavLink>
            <NavLink to="/banking" style={styles.getLinkStyle}>BankingDashboard</NavLink>
            <NavLink to="/library" style={styles.getLinkStyle}>LibraryPortal</NavLink>
            <NavLink to="/customer" style={styles.getLinkStyle}>CustomerDashboard</NavLink>
            <NavLink to="/learning" style={styles.getLinkStyle}>LearningDashboard</NavLink>
            <NavLink to="/more" style={styles.getMoreStyle}>⋮</NavLink>
        </nav>
    );
}

export default NavbarNavLink;