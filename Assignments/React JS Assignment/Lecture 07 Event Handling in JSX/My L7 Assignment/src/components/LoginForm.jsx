import React, { useState } from 'react';

function LoginForm() {
    const styles = {
        mainContainer: {
            padding: '24px',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            margin: '20px',
            backgroundColor: '#f8fafc',
            fontFamily: 'sans-serif',
            maxWidth: '500px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        heading: {
            color: '#0f172a',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '12px',
            margin: '0 0 24px 0',
            fontSize: '1.5rem'
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginBottom: '24px'
        },
        input: {
            padding: '12px 16px',
            fontSize: '0.95rem',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            outline: 'none',
            color: '#334155',
            backgroundColor: '#ffffff',
            transition: 'border-color 0.2s, box-shadow 0.2s',
            width: '100%',
            boxSizing: 'border-box'
        },
        previewCard: {
            background: '#ffffff',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
        },
        previewHeading: {
            margin: '0 0 12px 0',
            fontSize: '1rem',
            color: '#1e293b',
            borderBottom: '1px dashed #e2e8f0',
            paddingBottom: '6px'
        },
        dataRow: {
            margin: '0 0 8px 0',
            fontSize: '0.95rem',
            color: '#475569',
            display: 'flex'
        },
        label: {
            fontWeight: '600',
            color: '#64748b',
            width: '90px',
            display: 'inline-block',
            flexShrink: 0
        },
        value: {
            color: '#1e293b',
            wordBreak: 'break-word'
        }
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFocus = (e) => {
        e.target.style.borderColor = '#2563eb';
        e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = '#cbd5e1';
        e.target.style.boxShadow = 'none';
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 9: Login Form</h3>

            <div style={styles.formGroup}>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>

            <div style={styles.previewCard}>
                <h4 style={styles.previewHeading}>Live Preview</h4>
                <p style={styles.dataRow}>
                    <span style={styles.label}>Email:</span>
                    <span style={styles.value}>{email || 'N/A'}</span>
                </p>
                <p style={{ ...styles.dataRow, margin: 0 }}>
                    <span style={styles.label}>Password:</span>
                    <span style={styles.value}>
                        {password ? '••••••••' : 'N/A'}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default LoginForm;