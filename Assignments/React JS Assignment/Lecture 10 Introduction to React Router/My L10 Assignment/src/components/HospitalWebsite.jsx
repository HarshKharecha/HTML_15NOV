import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function HospitalWebsite() {
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
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#1e293b', borderRadius: '8px', marginBottom: '20px' },
        link: { color: '#ffffff', textDecoration: 'none', fontWeight: '600' }
    };

    function Home() { return <h3>City Health Care Hospital</h3>; }
    function Doctors() { return <h3>Our Doctors & Specialists</h3>; }
    function Appointments() { return <h3>Book an Appointment Online</h3>; }
    function Contact() { return <h3>Emergency Hotline: 911 / Help Desk</h3>; }

    return (
        <div style={styles.mainContainer}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Task 10: Hospital Management Website</h2>
                <nav style={styles.nav}>
                    <Link to="/hospitalwebsite" style={styles.link}>Home</Link>
                    <Link to="/hospitalwebsite/doctors" style={styles.link}>Doctors</Link>
                    <Link to="/hospitalwebsite/appointments" style={styles.link}>Appointments</Link>
                    <Link to="/hospitalwebsite/contact" style={styles.link}>Contact</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="doctors" element={<Doctors />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default HospitalWebsite;