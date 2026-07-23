import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function ShoppingWebsite() {
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
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#ea580c', borderRadius: '8px', marginBottom: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#ffedd5' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600',
            borderBottom: isActive ? '2px solid #ffedd5' : 'none'
        })
    };

    function Home() { return <h3>Welcome to MegaMart</h3>; }
    function Products() { return <h3>Browse All Products</h3>; }
    function Categories() { return <h3>Shop by Category</h3>; }
    function Cart() { return <h3>Your Shopping Cart</h3>; }
    function Wishlist() { return <h3>Saved Items</h3>; }

    return (
        <div style={styles.mainContainer}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Task 14: Online Shopping Website</h2>
                <nav style={styles.nav}>
                    <NavLink to="/shoppingwebsite" style={styles.getLinkStyle} end>Home</NavLink>
                    <NavLink to="/shoppingwebsite/products" style={styles.getLinkStyle}>Products</NavLink>
                    <NavLink to="/shoppingwebsite/categories" style={styles.getLinkStyle}>Categories</NavLink>
                    <NavLink to="/shoppingwebsite/cart" style={styles.getLinkStyle}>Cart</NavLink>
                    <NavLink to="/shoppingwebsite/wishlist" style={styles.getLinkStyle}>Wishlist</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="wishlist" element={<Wishlist />} />
                </Routes>
            </div>
        </div>
    );
}

export default ShoppingWebsite;