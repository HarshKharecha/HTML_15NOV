import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function EmployeeSystem() {
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
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#334155', borderRadius: '8px', marginBottom: '20px' },
        link: { color: '#ffffff', textDecoration: 'none', fontWeight: '600' }
    };

    function Dashboard() { return <h3>HR Overview</h3>; }
    function Employees() { return <h3>Employee Directory</h3>; }
    function Departments() { return <h3>Company Departments</h3>; }
    function Attendance() { return <h3>Daily Attendance Logs</h3>; }
    function Salary() { return <h3>Payroll & Salary Details</h3>; }

    return (
        <div style={styles.mainContainer}>
            <div style={styles.card}>
                <h2 style={styles.heading}>Task 13: Employee Management System</h2>
                <nav style={styles.nav}>
                    <Link to="/employeesystem" style={styles.link}>Dashboard</Link>
                    <Link to="/employeesystem/employees" style={styles.link}>Employees</Link>
                    <Link to="/employeesystem/departments" style={styles.link}>Departments</Link>
                    <Link to="/employeesystem/attendance" style={styles.link}>Attendance</Link>
                    <Link to="/employeesystem/salary" style={styles.link}>Salary</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="employees" element={<Employees />} />
                    <Route path="departments" element={<Departments />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="salary" element={<Salary />} />
                </Routes>
            </div>
        </div>
    );
}

export default EmployeeSystem;