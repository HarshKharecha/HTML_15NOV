import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function MovieBookingApp() {
    const styles = {
        container: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#0f172a', color: '#ffffff', fontFamily: 'sans-serif' },
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#1e293b', borderRadius: '8px', marginBottom: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#f43f5e' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600'
        })
    };

    function Home() { return <h3>Now Showing in Theatres</h3>; }
    function Movies() { return <h3>Browse Movies List</h3>; }
    function Booking() { return <h3>Select Seats & Book Tickets</h3>; }
    function Offers() { return <h3>Promotions & Discounts</h3>; }
    function Contact() { return <h3>Customer Support Desk</h3>; }

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <NavLink to="/more/movieBookingapp" style={styles.getLinkStyle} end>Home</NavLink>
                <NavLink to="/more/movieBookingapp/movies" style={styles.getLinkStyle}>Movies</NavLink>
                <NavLink to="/more/movieBookingapp/booking" style={styles.getLinkStyle}>Booking</NavLink>
                <NavLink to="/more/movieBookingapp/offers" style={styles.getLinkStyle}>Offers</NavLink>
                <NavLink to="/more/movieBookingapp/contact" style={styles.getLinkStyle}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="booking" element={<Booking />} />
                <Route path="offers" element={<Offers />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default MovieBookingApp;