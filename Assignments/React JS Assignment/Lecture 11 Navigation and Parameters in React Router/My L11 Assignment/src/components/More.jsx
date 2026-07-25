import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import UserPost from '../pages/UserPost';
import UserPostList from '../pages/UserPostList';
import LoginReplace from '../pages/LoginReplace';
import DashboardReplace from '../pages/DashboardReplace';
import ShopHome from '../pages/MiniEcommerce/ShopHome';
import ShopProducts from '../pages/MiniEcommerce/ShopProducts';
import ShopProductDetails from '../pages/MiniEcommerce/ShopProductDetails';
import ShopCart from '../pages/MiniEcommerce/ShopCart';
import ShopCheckout from '../pages/MiniEcommerce/ShopCheckout';
import ShopOrderSuccess from '../pages/MiniEcommerce/ShopOrderSuccess';

function More() {
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
        nav: { display: 'flex', gap: '16px', padding: '16px 24px', borderBottom: '2px solid #e2e8f0', borderRadius: '8px', margin: '20px' },
        // link: { color: '#0f172a', textDecoration: 'none', fontWeight: '600', fontSize: '1rem' }
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#38bdf8' : '#0f172a',
            textDecoration: 'none',
            fontWeight: '600',
            borderBottom: isActive ? '2px solid #38bdf8' : '2px solid transparent',
            paddingBottom: '4px'
        })
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.card}>

                <nav style={styles.nav}>
                    <NavLink to="/more/userpostlist/" style={styles.getLinkStyle} end>UserPostList</NavLink>
                    <NavLink to="/more/loginreplace/" style={styles.getLinkStyle} end>LoginReplace</NavLink>
                    <NavLink to="/more/ecommerce/home" style={styles.getLinkStyle}>Mini E-Commerce</NavLink>
                </nav>
                <Routes>
                    <Route path="userpostlist/*" element={<UserPostList />} />
                    <Route path="userpostlist/user/:userId/post/:postId" element={<UserPost />} />
                    <Route path="loginreplace/*" element={<LoginReplace />} />
                    <Route path="loginreplace/dashboard" element={<DashboardReplace />} />
                    <Route path="ecommerce/home" element={<ShopHome />} />
                    <Route path="ecommerce/products" element={<ShopProducts />} />
                    <Route path="ecommerce/product/:id" element={<ShopProductDetails />} />
                    <Route path="ecommerce/cart" element={<ShopCart />} />
                    <Route path="ecommerce/checkout" element={<ShopCheckout />} />
                    <Route path="ecommerce/success" element={<ShopOrderSuccess />} />
                </Routes>
            </div>
        </div>
    );
}

export default More;