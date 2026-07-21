import React, { useState } from 'react';

function UserAuthDashboard() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #cbd5e1',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            maxWidth: '600px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            marginBottom: '20px'
        },
        heading: {
            color: '#0f172a',
            margin: 0,
            fontSize: '1.5rem'
        },
        controlPanel: {
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            padding: '12px',
            backgroundColor: '#edf2f7',
            borderRadius: '8px'
        },
        section: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px'
        },
        adminSection: {
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px'
        },
        notificationBadge: {
            backgroundColor: '#ef4444',
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '12px',
            fontSize: '0.85rem',
            fontWeight: '700',
            display: 'inline-block',
            marginBottom: '16px'
        },
        button: (bg) => ({
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            backgroundColor: bg,
            color: '#ffffff',
            transition: 'all 0.2s ease'
        })
    };

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const [notifications, setNotifications] = useState(5);

    // Demonstration handling via regular if-else logic
    const renderWelcomeMessage = () => {
        if (isLoggedIn) {
            return <h4 style={{ margin: 0, color: '#16a34a' }}>👋 Welcome Back, User!</h4>;
        } else {
            return <h4 style={{ margin: 0, color: '#dc2626' }}> Please Login to Access Platform</h4>;
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.header}>
                <h3 style={styles.heading}>Task 20: Auth Dashboard</h3>
                <button
                    style={styles.button(isLoggedIn ? '#ef4444' : '#2563eb')}
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </div>

            {/* Controls Bar for State Testing */}
            <div style={styles.controlPanel}>
                <label style={{ fontSize: '0.85rem', color: '#475569' }}>
                    <input
                        type="checkbox"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    /> Admin Role
                </label>
                <label style={{ fontSize: '0.85rem', color: '#475569', marginLeft: '12px' }}>
                    Notifications:
                    <input
                        type="number"
                        value={notifications}
                        onChange={(e) => setNotifications(Number(e.target.value))}
                        style={{ width: '40px', marginLeft: '4px' }}
                    />
                </label>
            </div>

            {/* Display Welcome Status via Function with If-Else */}
            <div style={styles.section}>
                {renderWelcomeMessage()}
            </div>

            {/* User Dashboard Conditional Rendering via Ternary Operator */}
            {isLoggedIn ? (
                <div>
                    {/* Notification Badge using Logical AND (&&) */}
                    {notifications > 0 && (
                        <div style={styles.notificationBadge}>
                             You have {notifications} unread notifications
                        </div>
                    )}

                    {/* Standard User Dashboard Section */}
                    <div style={styles.section}>
                        <h4 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>User Dashboard</h4>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>
                            Access your personal feeds, user settings, and account overview here.
                        </p>
                    </div>

                    {/* Admin Panel via Logical AND (&&) */}
                    {isAdmin && (
                        <div style={styles.adminSection}>
                            <h4 style={{ margin: '0 0 8px 0', color: '#1e40af' }}>🛠️ Admin Panel</h4>
                            <ul style={{ margin: 0, paddingLeft: '20px', color: '#1e3a8a' }}>
                                <li>Admin Dashboard</li>
                                <li>Manage Users</li>
                                <li>Reports</li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default UserAuthDashboard;