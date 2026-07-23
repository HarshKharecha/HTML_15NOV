import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarNavLink() {
    const styles = {
        nav: { display: 'flex', gap: '16px', padding: '16px 24px', backgroundColor: '#0f172a', borderRadius: '8px', margin: '20px' },
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
            paddingBottom: '9px',
            fontSize: '2rem'
        })
    };

    return (
        <nav style={styles.nav}>
            <NavLink to="/" style={styles.getLinkStyle}>Home</NavLink>
            <NavLink to="/about" style={styles.getLinkStyle}>About</NavLink>
            <NavLink to="/contact" style={styles.getLinkStyle}>Contact</NavLink>
            <NavLink to="/studentportal" style={styles.getLinkStyle}>StudentPortal</NavLink>
            <NavLink to="/companywebsite/" style={styles.getLinkStyle}>CompanyWebsite</NavLink>
            <NavLink to="/restaurantwebsite" style={styles.getLinkStyle}>RestaurantWebsite</NavLink>
            <NavLink to="/hospitalwebsite" style={styles.getLinkStyle}>HospitalWebsite</NavLink>
            <NavLink to="/collegesystem" style={styles.getLinkStyle}>CollegeSystem</NavLink>
            <NavLink to="/bankingdashboard" style={styles.getLinkStyle}>BankingDashboard</NavLink>
            <NavLink to="/employeesystem" style={styles.getLinkStyle}>EmployeeSystem</NavLink>
            <NavLink to="/shoppingwebsite" style={styles.getLinkStyle}>ShoppingWebsite</NavLink>
            <NavLink to="/more" style={styles.getMoreStyle}>⋮</NavLink>
        </nav>
    );
}

export default NavbarNavLink;