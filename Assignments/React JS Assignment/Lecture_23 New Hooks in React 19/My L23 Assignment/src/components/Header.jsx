import React from "react";

function Header({ searchQuery, setSearchQuery }) {
    const styles = {
        header: {
            backgroundColor: "#1e293b",
            color: "#ffffff",
            padding: "1rem 2rem",
            display: "flex",
            justify: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #334155",
        },
        title: {
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: "600",
        },
        badge: {
            backgroundColor: "#3b82f6",
            padding: "0.25rem 0.75rem",
            borderRadius: "12px",
            fontSize: "0.85rem",
            marginLeft:'15px'
        },
        searchInput: {
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #475569',
            backgroundColor: '#0f172a',
            color: '#fff',
            width: '250px',
            marginLeft:'15px'
        }
    };

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Smart Dashboard</h1>
            <span style={styles.badge}>React 19 Hooks</span>
            <input
                type="text"
                placeholder="Search tasks....."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.searchInput}
            />
        </header>
    );
}

export default Header;