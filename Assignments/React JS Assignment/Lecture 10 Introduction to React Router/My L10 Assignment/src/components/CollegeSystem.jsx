import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function CollegeSystem() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 24px 0',
            fontSize: '1.5rem'
        },
        card: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        },
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#1e1b4b', borderRadius: '8px', marginBottom: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#a855f7' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600'
        })
    };

    function Home() { return <h3>Welcome to State University</h3>; }
    function Courses() { return <h3>Academic Courses Offered</h3>; }
    function Admission() { return <h3>Admission Process 2026</h3>; }
    function Faculty() { return <h3>Our Experienced Faculty</h3>; }
    function Contact() { return <h3>Campus Address & Contact</h3>; }

    return (
        <div style={styles.mainContainer}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Task 11: College Management System</h2>
                <nav style={styles.nav}>
                    <NavLink to="/collegesystem" style={styles.getLinkStyle} end>Home</NavLink>
                    <NavLink to="/collegesystem/courses" style={styles.getLinkStyle}>Courses</NavLink>
                    <NavLink to="/collegesystem/admission" style={styles.getLinkStyle}>Admission</NavLink>
                    <NavLink to="/collegesystem/faculty" style={styles.getLinkStyle}>Faculty</NavLink>
                    <NavLink to="/collegesystem/contact" style={styles.getLinkStyle}>Contact</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="admission" element={<Admission />} />
                    <Route path="faculty" element={<Faculty />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default CollegeSystem;