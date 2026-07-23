import React from 'react';
import { Link } from 'react-router-dom';

function NavbarLink() {
    const styles = {
        nav: { display: 'flex', gap: '16px', padding: '16px 24px', backgroundColor: '#2563eb', borderRadius: '8px', margin: '20px' },
        link: { color: '#ffffff', textDecoration: 'none', fontWeight: '600', fontSize: '1rem' },
        more: {color: '#ffffff', textDecoration: 'none', fontWeight: '600', fontSize: '2rem' }
    };

    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            <Link to="/studentportal" style={styles.link}>StudentPortal</Link>
            <Link to="/companywebsite/" style={styles.link}>CompanyWebsite</Link>
            <Link to="/restaurantwebsite" style={styles.link}>RestaurantWebsite</Link>
            <Link to="/hospitalwebsite" style={styles.link}>HospitalWebsite</Link>
            <Link to="/collegesystem" style={styles.link}>CollegeSystem</Link>
            <Link to="/bankingdashboard" style={styles.link}>BankingDashboard</Link>
            <Link to="/employeesystem" style={styles.link}>EmployeeSystem</Link>
            <Link to="/shoppingwebsite" style={styles.link}>ShoppingWebsite</Link>
            <Link to="/more" style={styles.more}>⋮</Link>
        </nav>
    );
}

export default NavbarLink;