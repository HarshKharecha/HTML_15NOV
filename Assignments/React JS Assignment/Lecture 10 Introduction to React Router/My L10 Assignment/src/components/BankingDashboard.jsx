import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function BankingDashboard() {
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
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#0284c7', borderRadius: '8px', marginBottom: '20px' },
        link: { color: '#ffffff', textDecoration: 'none', fontWeight: '600' }
    };

    function Dashboard() { return <h3>Financial Summary & Analytics</h3>; }
    function Accounts() { return <h3>Savings & Checking Accounts</h3>; }
    function Transactions() { return <h3>Recent Transaction History</h3>; }
    function TransferMoney() { return <h3>Transfer Funds Instantly</h3>; }
    function Profile() { return <h3>User Profile Settings</h3>; }

    return (
        <div style={styles.mainContainer}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Task 12: Banking Dashboard</h2>
                <nav style={styles.nav}>
                    <Link to="/bankingdashboard" style={styles.link}>Dashboard</Link>
                    <Link to="/bankingdashboard/accounts" style={styles.link}>Accounts</Link>
                    <Link to="/bankingdashboard/transactions" style={styles.link}>Transactions</Link>
                    <Link to="/bankingdashboard/transfer" style={styles.link}>Transfer Money</Link>
                    <Link to="/bankingdashboard/profile" style={styles.link}>Profile</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="accounts" element={<Accounts />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="transfer" element={<TransferMoney />} />
                    <Route path="profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    );
}

export default BankingDashboard;