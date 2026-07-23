import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function ELearningPlatform() {
    const styles = {
        container: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' },
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#0d9488', borderRadius: '8px', marginBottom: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#ccfbf1' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600'
        })
    };

    function Home() { return <h3>Welcome to SkillUp Portal</h3>; }
    function Courses() { return <h3>Explore Tech & Business Courses</h3>; }
    function MyLearning() { return <h3>Enrolled Courses & Study Progress</h3>; }
    function Certificates() { return <h3>Your Verified Certifications</h3>; }
    function Profile() { return <h3>User Account & Settings</h3>; }

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <NavLink to="/more/eLearningPlatform" style={styles.getLinkStyle} end>Home</NavLink>
                <NavLink to="/more/eLearningPlatform/courses" style={styles.getLinkStyle}>Courses</NavLink>
                <NavLink to="/more/eLearningPlatform/learning" style={styles.getLinkStyle}>My Learning</NavLink>
                <NavLink to="/more/eLearningPlatform/certificates" style={styles.getLinkStyle}>Certificates</NavLink>
                <NavLink to="/more/eLearningPlatform/profile" style={styles.getLinkStyle}>Profile</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="courses" element={<Courses />} />
                <Route path="learning" element={<MyLearning />} />
                <Route path="certificates" element={<Certificates />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default ELearningPlatform;