import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function LibrarySystem() {
    const styles = {
        container: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif' },
        nav: { display: 'flex', gap: '16px', padding: '12px 20px', backgroundColor: '#334155', borderRadius: '8px', marginBottom: '20px' },
        getLinkStyle: ({ isActive }) => ({
            color: isActive ? '#38bdf8' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '600'
        })
    };

    function Home() { return <h3>Central Library Hub</h3>; }
    function Books() { return <h3>Book Catalog & Search</h3>; }
    function Members() { return <h3>Registered Members Directory</h3>; }
    function IssueBook() { return <h3>Issue / Return Book Desk</h3>; }
    function Contact() { return <h3>Library Support & Hours</h3>; }

    return (
        <div style={styles.container}>
            <nav style={styles.nav}>
                <NavLink to="/more/librarySystem" style={styles.getLinkStyle} end>Home</NavLink>
                <NavLink to="/more/librarySystem/books" style={styles.getLinkStyle}>Books</NavLink>
                <NavLink to="/more/librarySystem/members" style={styles.getLinkStyle}>Members</NavLink>
                <NavLink to="/more/librarySystem/issue" style={styles.getLinkStyle}>Issue Book</NavLink>
                <NavLink to="/more/librarySystem/contact" style={styles.getLinkStyle}>Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="books" element={<Books />} />
                <Route path="members" element={<Members />} />
                <Route path="issue" element={<IssueBook />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default LibrarySystem;