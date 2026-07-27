import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function BlogDashboardLayout() {
    const styles = {
        layoutContainer: {
            minHeight: '100vh',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            backgroundColor: '#f8fafc',
            display: 'flex',
            flexDirection: 'column'
        },
        header: {
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '0 24px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        brand: {
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#38bdf8',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        headerRight: {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.9rem',
            color: '#cbd5e1'
        },
        badge: {
            backgroundColor: '#0284c7',
            color: '#ffffff',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '600'
        },
        subNav: {
            backgroundColor: '#1e293b',
            padding: '0 24px',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto'
        },
        link: {
            padding: '12px 16px',
            color: '#94a3b8',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            borderBottom: '3px solid transparent',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap'
        },
        activeLink: {
            borderBottom: '3px solid #38bdf8',
            color: '#38bdf8',
            fontWeight: '700'
        },
        mainContent: {
            flex: 1,
            maxWidth: '1200px',
            width: '100%',
            margin: '24px auto',
            padding: '0 16px',
            boxSizing: 'border-box'
        }
    };

    return (
        <div style={styles.layoutContainer}>
            <header style={styles.header}>
                <div style={styles.brand}>📝 TechPulse Admin</div>
                <div style={styles.headerRight}>
                    <span>Alex Morgan</span>
                    <span style={styles.badge}>Editor-in-Chief</span>
                </div>
            </header>

            <nav style={styles.subNav}>
                <NavLink
                    to="/more/blogdashboard/dashboard"
                    style={({ isActive }) => ({
                        ...styles.link,
                        ...(isActive ? styles.activeLink : {})
                    })}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/more/blogdashboard/posts"
                    style={({ isActive }) => ({
                        ...styles.link,
                        ...(isActive ? styles.activeLink : {})
                    })}
                >
                    All Posts
                </NavLink>
                <NavLink
                    to="/more/blogdashboard/add-post"
                    style={({ isActive }) => ({
                        ...styles.link,
                        ...(isActive ? styles.activeLink : {})
                    })}
                >
                    Add Post
                </NavLink>
                <NavLink
                    to="/more/blogdashboard/categories"
                    style={({ isActive }) => ({
                        ...styles.link,
                        ...(isActive ? styles.activeLink : {})
                    })}
                >
                    Categories
                </NavLink>
                <NavLink
                    to="/more/blogdashboard/comments"
                    style={({ isActive }) => ({
                        ...styles.link,
                        ...(isActive ? styles.activeLink : {})
                    })}
                >
                    Comments
                </NavLink>
                <NavLink
                    to="/more/blogdashboard/users"
                    style={({ isActive }) => ({
                        ...styles.link,
                        ...(isActive ? styles.activeLink : {})
                    })}
                >
                    User Management
                </NavLink>
            </nav>

            <main style={styles.mainContent}>
                <Outlet />
            </main>
        </div>
    );
}

export default BlogDashboardLayout