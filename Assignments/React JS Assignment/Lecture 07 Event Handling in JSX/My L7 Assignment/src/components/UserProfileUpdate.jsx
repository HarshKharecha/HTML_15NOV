import React, { useState } from 'react';

function UserProfileUpdate() {
    const [profile, setProfile] = useState({
        name: '',
        city: '',
        profession: ''
    });

    const [savedProfile, setSavedProfile] = useState(null);

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
            margin: '0 0 20px 0', 
            fontSize: '1.5rem' 
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '20px'
        },
        input: {
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            boxSizing: 'border-box',
            fontSize: '0.95rem',
            color: '#1e293b',
            outline: 'none',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
        },
        submitBtn: {
            backgroundColor: '#2563eb',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 16px',
            fontWeight: '600',
            fontSize: '0.95rem',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
        },
        trackBox: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '14px',
            marginTop: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        },
        trackHeading: {
            margin: '0 0 10px 0',
            color: '#64748b',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        },
        trackLine: {
            margin: '0 0 6px 0',
            fontSize: '0.9rem',
            color: '#334155'
        },
        profileCard: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
            marginTop: '24px',
            borderTop: '4px solid #10b981', // Emerald top border accent for verification
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        },
        badge: {
            fontSize: '0.75rem',
            fontWeight: '700',
            color: '#047857',
            backgroundColor: '#d1fae5',
            padding: '4px 8px',
            borderRadius: '4px',
            display: 'inline-block',
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
        },
        profileName: {
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#0f172a',
            margin: '0 0 12px 0'
        },
        divider: {
            border: 0,
            borderTop: '1px dashed #e2e8f0',
            margin: '12px 0'
        },
        profileDetail: {
            margin: '0 0 8px 0',
            fontSize: '0.95rem',
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdateProfile = () => {
        if (!profile.name.trim() && !profile.city.trim() && !profile.profession.trim()) return;

        setSavedProfile({ ...profile });
        setProfile({ name: '', city: '', profession: '' });
    };

    // Helper functions to handle explicit element focus stylings
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
            <h3 style={styles.heading}>Task 17: User Profile Update</h3>

            <div style={styles.formGroup}>
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    value={profile.name}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <input
                    name="city"
                    type="text"
                    placeholder="City"
                    value={profile.city}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <input
                    name="profession"
                    type="text"
                    placeholder="Profession"
                    value={profile.profession}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />

                <button 
                    onClick={handleUpdateProfile}
                    style={styles.submitBtn}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#1d4ed8';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563eb';
                        e.currentTarget.style.transform = 'none';
                    }}
                >
                    Save & Update Profile Card
                </button>
            </div>

            {/* Dynamic Live Text Preview */}
            <div style={styles.trackBox}>
                <h5 style={styles.trackHeading}>Live Typing Track</h5>
                <p style={styles.trackLine}><strong>Name:</strong> {profile.name || '—'}</p>
                <p style={styles.trackLine}><strong>City:</strong> {profile.city || '—'}</p>
                <p style={styles.trackLine}><strong>Profession:</strong> {profile.profession || '—'}</p>
            </div>

            {/* Generated User Profile Card UI */}
            {savedProfile && (
                <div style={styles.profileCard}>
                    <span style={styles.badge}>✓ Verified Profile</span>
                    <h4 style={styles.profileName}>
                        {savedProfile.name || 'Anonymous User'}
                    </h4>
                    <hr style={styles.divider} />
                    <p style={styles.profileDetail}>
                        <span>📍</span> <span><strong>Lives in:</strong> {savedProfile.city || 'Unknown Location'}</span>
                    </p>
                    <p style={{ ...styles.profileDetail, margin: 0 }}>
                        <span>💼</span> <span><strong>Works as:</strong> {savedProfile.profession || 'Not Specified'}</span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default UserProfileUpdate;