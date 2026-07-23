import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function FoodDeliveryWebsite() {
    const styles = {
        container: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' },
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#dc2626', borderRadius: '8px', marginBottom: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#fef08a' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600'
        })
    };

    function Home() { return <h3>Crave Fast Food Delivery Hub</h3>; }
    function Restaurants() { return <h3>Partner Restaurants Near You</h3>; }
    function Orders() { return <h3>Your Active & Past Orders</h3>; }
    function Offers() { return <h3>Promo Codes & Cashbacks</h3>; }
    function Contact() { return <h3>Customer Support Chat & Helpline</h3>; }

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <NavLink to="/more/foodDeliveryWebsite" style={styles.getLinkStyle} end>Home</NavLink>
                <NavLink to="/more/foodDeliveryWebsite/restaurants" style={styles.getLinkStyle}>Restaurants</NavLink>
                <NavLink to="/more/foodDeliveryWebsite/orders" style={styles.getLinkStyle}>Orders</NavLink>
                <NavLink to="/more/foodDeliveryWebsite/offers" style={styles.getLinkStyle}>Offers</NavLink>
                <NavLink to="/more/foodDeliveryWebsite/contact" style={styles.getLinkStyle}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="restaurants" element={<Restaurants />} />
                <Route path="orders" element={<Orders />} />
                <Route path="offers" element={<Offers />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default FoodDeliveryWebsite;