import React, { useState } from 'react';

function StudentRegistration() {
    const styles = {
        mainContainer: { 
            padding: '24px', 
            border: '1px solid #e2e8f0', 
            borderRadius: '12px', 
            margin: '20px', 
            backgroundColor: '#f8fafc', 
            fontFamily: 'sans-serif' 
        },
        heading: { 
            color: '#0f172a', 
            borderBottom: '2px solid #e2e8f0', 
            paddingBottom: '12px', 
            margin: '0 0 24px 0', 
            fontSize: '1.5rem' 
        },
        contentWrapper: {
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            alignItems: 'flex-start'
        },
        formGroup: { 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '14px', 
            width: '100%',
            maxWidth: '320px' 
        },
        input: {
            padding: '12px 16px',
            fontSize: '0.95rem',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            outline: 'none',
            color: '#334155',
            backgroundColor: '#ffffff',
            transition: 'border-color 0.2s, box-shadow 0.2s'
        },
        previewCard: { 
            flex: '1',
            minWidth: '280px',
            maxWidth: '400px',
            background: '#ffffff', 
            padding: '20px', 
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        previewHeading: {
            margin: '0 0 16px 0',
            fontSize: '1.1rem',
            color: '#1e293b',
            borderBottom: '1px dashed #e2e8f0',
            paddingBottom: '8px'
        },
        dataRow: {
            margin: '0 0 10px 0',
            fontSize: '0.95rem',
            color: '#475569',
            display: 'flex'
        },
        label: {
            fontWeight: '600',
            color: '#64748b',
            width: '80px',
            display: 'inline-block',
            flexShrink: 0
        },
        value: {
            color: '#1e293b',
            wordBreak: 'break-word'
        }
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [course, setCourse] = useState('');

    // Shared input focus handlers to mimic global dynamic states
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
            <h3 style={styles.heading}>Task 10: Student Registration Form</h3>
            
            <div style={styles.contentWrapper}>
                {/* Inputs Column */}
                <div style={styles.formGroup}>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        style={styles.input}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
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
                        type="tel" 
                        placeholder="Mobile Number" 
                        value={mobile} 
                        onChange={(e) => setMobile(e.target.value)} 
                        style={styles.input}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <input 
                        type="text" 
                        placeholder="Course Selection" 
                        value={course} 
                        onChange={(e) => setCourse(e.target.value)} 
                        style={styles.input}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>

                {/* Live Preview Card */}
                <div style={styles.previewCard}>
                    <h4 style={styles.previewHeading}>Registration Live Preview</h4>
                    
                    <p style={styles.dataRow}>
                        <span style={styles.label}>Name:</span> 
                        <span style={styles.value}>{name || '---'}</span>
                    </p>
                    <p style={styles.dataRow}>
                        <span style={styles.label}>Email:</span> 
                        <span style={styles.value}>{email || '---'}</span>
                    </p>
                    <p style={styles.dataRow}>
                        <span style={styles.label}>Mobile:</span> 
                        <span style={styles.value}>{mobile || '---'}</span>
                    </p>
                    <p style={{ ...styles.dataRow, margin: 0 }}>
                        <span style={styles.label}>Course:</span> 
                        <span style={styles.value}>{course || '---'}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StudentRegistration;