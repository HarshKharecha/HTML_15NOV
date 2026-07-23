import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import MovieBookingApp from './MovieBookingApp';
import LibrarySystem from './LibrarySystem';
import FoodDeliveryWebsite from './FoodDeliveryWebsite';
import ELearningPlatform from './ELearningPlatform';
import PortfolioWebsite from './PortfolioWebsite';
import IndustryEcommerceWebsite from './IndustryEcommerceWebsite';

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
                    <NavLink to="/more/movieBookingapp/" style={styles.getLinkStyle} end>MovieBookingApp</NavLink>
                    <NavLink to="/more/librarySystem" style={styles.getLinkStyle}>Library System</NavLink>
                    <NavLink to="/more/foodDeliveryWebsite" style={styles.getLinkStyle}>Food Delivery</NavLink>
                    <NavLink to="/more/eLearningPlatform" style={styles.getLinkStyle}>E-Learning</NavLink>
                    <NavLink to="/more/portfolioWebsite" style={styles.getLinkStyle}>Portfolio</NavLink>
                    <NavLink to="/more/industryEcommerceWebsite" style={styles.getLinkStyle}>Industry E-Commerce</NavLink>
                </nav>
                <Routes>
                    <Route path="movieBookingapp/*" element={<MovieBookingApp />} />
                    <Route path="librarySystem/*" element={<LibrarySystem />} />
                    <Route path="foodDeliveryWebsite/*" element={<FoodDeliveryWebsite />} />
                    <Route path="eLearningPlatform/*" element={<ELearningPlatform />} />
                    <Route path="portfolioWebsite/*" element={<PortfolioWebsite />} />
                    <Route path="industryEcommerceWebsite/*" element={<IndustryEcommerceWebsite />} />
                </Routes>
            </div>
        </div>
    );
}

export default More;