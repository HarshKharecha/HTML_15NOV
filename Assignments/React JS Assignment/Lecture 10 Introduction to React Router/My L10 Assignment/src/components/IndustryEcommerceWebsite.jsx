import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function IndustryEcommerceWebsite() {
    const styles = {
        container: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' },
        nav: { display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '12px 20px', backgroundColor: '#0f172a', borderRadius: '8px', marginBottom: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#38bdf8' : '#e2e8f0',
            textDecoration: 'none',
            fontWeight: '600',
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: isActive ? 'rgba(56, 189, 248, 0.15)' : 'transparent'
        })
    };

    function Home() { return <h3>🛒 Industry Store Homepage</h3>; }
    function Products() { return <h3>📦 Complete Product Catalog</h3>; }
    function ProductDetails() { return <h3>🔎 Detailed Product View & Specifications</h3>; }
    function Categories() { return <h3>🏷️ Shop by Product Categories</h3>; }
    function Cart() { return <h3>🛍️ Shopping Cart Details</h3>; }
    function Wishlist() { return <h3>❤️ Saved Items Wishlist</h3>; }
    function Orders() { return <h3>📋 Order Tracking & Purchase History</h3>; }
    function Profile() { return <h3>👤 User Account Management</h3>; }
    function About() { return <h3>ℹ️ About Our Brand & Mission</h3>; }
    function Contact() { return <h3>📞 24/7 Customer Service Support</h3>; }

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <NavLink to="/more/industryEcommerceWebsite" style={styles.getLinkStyle} end>Home</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/products" style={styles.getLinkStyle}>Products</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/product-details" style={styles.getLinkStyle}>Product Details</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/categories" style={styles.getLinkStyle}>Categories</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/cart" style={styles.getLinkStyle}>Cart</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/wishlist" style={styles.getLinkStyle}>Wishlist</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/orders" style={styles.getLinkStyle}>Orders</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/profile" style={styles.getLinkStyle}>Profile</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/about" style={styles.getLinkStyle}>About</NavLink>
                <NavLink to="/more/industryEcommerceWebsite/contact" style={styles.getLinkStyle}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="product-details" element={<ProductDetails />} />
                <Route path="categories" element={<Categories />} />
                <Route path="cart" element={<Cart />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="orders" element={<Orders />} />
                <Route path="profile" element={<Profile />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default IndustryEcommerceWebsite;