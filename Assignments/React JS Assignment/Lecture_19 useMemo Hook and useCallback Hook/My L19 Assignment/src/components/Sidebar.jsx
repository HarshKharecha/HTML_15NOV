// import React from 'react';

// const styles = {
//     sidebar: {
//         width: '240px',
//         backgroundColor: '#0f172a',
//         color: '#f8fafc',
//         padding: '1.5rem 1rem',
//         minHeight: 'calc(100vh - 120px)',
//     },
//     heading: {
//         fontSize: '0.75rem',
//         textTransform: 'uppercase',
//         letterSpacing: '0.05em',
//         color: '#64748b',
//         marginBottom: '1rem',
//     },
//     navList: {
//         listStyle: 'none',
//         padding: 0,
//         margin: 0,
//     },
//     navItem: {
//         padding: '0.75rem 1rem',
//         borderRadius: '0.375rem',
//         cursor: 'pointer',
//         color: '#cbd5e1',
//         marginBottom: '0.25rem',
//         fontSize: '0.875rem',
//     },
//     activeItem: {
//         backgroundColor: '#2563eb',
//         color: '#ffffff',
//         fontWeight: '600',
//     },
// };

// function handale() {
//     alert("Under Devlopement")
// }

// function Sidebar() {
//     return (
//         <aside style={styles.sidebar}>
//             <h3 style={styles.heading}>Navigation</h3>
//             <ul style={styles.navList}>
//                 <li style={{ ...styles.navItem, ...styles.activeItem }}>Dashboard Overview</li>
//                 <li style={styles.navItem}>Product Management</li>
//                 <li style={styles.navItem}>Performance Logs</li>
//                 <li style={styles.navItem} onClick={handale}>Settings</li>
//             </ul>
//         </aside>
//     );
// }

// export default Sidebar;

import React from 'react';

const styles = {
    sidebar: {
        width: '240px',
        backgroundColor: '#051b3f',
        color: '#f8fafc',
        padding: '1.5rem 1rem',
        minHeight: 'calc(100vh - 120px)',
    },
    heading: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: '#f0f0f0',
        marginBottom: '1rem',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    navItem: {
        padding: '0.75rem 1rem',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        color: '#cbd5e1',
        marginBottom: '0.25rem',
        fontSize: '0.875rem',
    },
    activeItem: {
        backgroundColor: '#2563eb',
        color: '#ffffff',
        fontWeight: '600',
    },
};

function Sidebar({ activeTab, setActiveTab }) {
    const navItems = [
        'Dashboard Overview',
        'Product Management',
        'Performance Logs',
        'Settings'
    ];

    return (
        <aside style={styles.sidebar}>
            <h3 style={styles.heading}>Navigation</h3>
            <ul style={styles.navList}>
                {navItems.map((item) => {
                    const isActive = activeTab === item;
                    return (
                        <li
                            key={item}
                            style={{
                                ...styles.navItem,
                                ...(isActive ? styles.activeItem : {}),
                            }}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default Sidebar;