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
            <NavLink to="/dashboard" style={styles.getLinkStyle}>Dashboard</NavLink>
            <NavLink to="/productlist" style={styles.getLinkStyle}>ProductList</NavLink>
            <NavLink to="/employeeslist" style={styles.getLinkStyle}>EmployeesList</NavLink>
            <NavLink to="/studentlist" style={styles.getLinkStyle}>StudentList</NavLink>
            <NavLink to="/bloglist" style={styles.getLinkStyle}>BlogList</NavLink>
            <NavLink to="/movielist" style={styles.getLinkStyle}>MovieList</NavLink>
            <NavLink to="/patientlist" style={styles.getLinkStyle}>PatientList</NavLink>
            <NavLink to="/courselist" style={styles.getLinkStyle}>CourseList</NavLink>
            <NavLink to="/productgallery" style={styles.getLinkStyle}>ProductGallery</NavLink>
            <NavLink to="/directory" style={styles.getLinkStyle}>Directory</NavLink>
            <NavLink to="/accountlist" style={styles.getLinkStyle}>AccountList</NavLink>
            <NavLink to="/booklist" style={styles.getLinkStyle}>BookList</NavLink>
            <NavLink to="/orderlist" style={styles.getLinkStyle}>OrderList</NavLink>
            <NavLink to="/foodlist" style={styles.getLinkStyle}>FoodMenu</NavLink>
            <NavLink to="/login" style={styles.getLinkStyle}>Login</NavLink>
            <NavLink to="/register" style={styles.getLinkStyle}>Register</NavLink>
            <NavLink to="/more" style={styles.getMoreStyle}>⋮</NavLink>
        </nav>
    );
}

export default NavbarNavLink;