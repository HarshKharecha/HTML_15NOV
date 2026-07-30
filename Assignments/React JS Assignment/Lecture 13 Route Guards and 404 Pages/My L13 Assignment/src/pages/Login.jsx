import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const styles = {
        mainContainer: {
            fontFamily: 'system-ui, sans-serif',
            margin: '20px',
            padding: '24px',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0'
        },
        subContainer: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
            maxWidth: '400px',
            margin: '0 auto',
            boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.02)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            marginBottom: '16px',
            fontSize: '1.5rem'
        },
        select: {
            width: '100%',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            marginBottom: '16px',
            fontSize: '1rem'
        },
        button: {
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 16px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
        }
    };

    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleLogin = () => {
        const fakeToken = 'auth_token_123456';
        localStorage.setItem('token', fakeToken);
        localStorage.setItem('role', role);

        if (role === 'admin') {
            navigate('/admin');
        } else if (role === 'user') {
            navigate('/dashboard');
        } else if (role === 'student') {
            navigate('/student');
        } else {
            navigate('/employee');
        }
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.subContainer}>
                <h2 style={styles.heading}>Login Page</h2>
                <label style={{ display: 'block', marginBottom: '8px', color: '#475569' }}>
                    Select Role:
                </label>
                <select style={styles.select} value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                </select>
                <button style={styles.button} onClick={handleLogin}>
                    Log In
                </button>
            </div>
        </div>
    );
}

export default Login;