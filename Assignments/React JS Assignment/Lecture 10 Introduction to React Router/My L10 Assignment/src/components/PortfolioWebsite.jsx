import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function PortfolioWebsite() {
    const styles = {
        container: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#ffffff', fontFamily: 'sans-serif' },
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#2563eb', borderRadius: '8px', marginBottom: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#93c5fd' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600',
            borderBottom: isActive ? '2px solid #93c5fd' : 'none'
        })
    };

    function Home() { return <h3>Hello, I'm a Full Stack Web Developer</h3>; }
    function AboutMe() { return <h3>About My Professional Journey & Education</h3>; }
    function Projects() { return <h3>Featured Full-Stack Web Projects</h3>; }
    function Skills() { return <h3>Technical Skills: React, JavaScript, Node.js & CSS</h3>; }
    function Contact() { return <h3>Let's Connect & Build Together</h3>; }

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <NavLink to="/more/portfolioWebsite" style={styles.getLinkStyle} end>Home</NavLink>
                <NavLink to="/more/portfolioWebsite/about" style={styles.getLinkStyle}>About Me</NavLink>
                <NavLink to="/more/portfolioWebsite/projects" style={styles.getLinkStyle}>Projects</NavLink>
                <NavLink to="/more/portfolioWebsite/skills" style={styles.getLinkStyle}>Skills</NavLink>
                <NavLink to="/more/portfolioWebsite/contact" style={styles.getLinkStyle}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutMe />} />
                <Route path="projects" element={<Projects />} />
                <Route path="skills" element={<Skills />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default PortfolioWebsite;