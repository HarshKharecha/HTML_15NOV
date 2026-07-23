import React from 'react';

function Home() {
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
        welcomeBox: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#475569',
            fontSize: '0.95rem'
        },
        button: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
        }
    };

    const handleWelcomeClick = () => {
        alert("Welcome to React!");
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 1: Welcome Home</h3>

            <div style={styles.welcomeBox}>
                Click the button below to initialize the application entry greeting.
            </div>

            <button
                style={styles.button}
                onClick={handleWelcomeClick}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#1d4ed8';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                    e.currentTarget.style.transform = 'none';
                }}
            >
                <span>👋</span> Say Welcome
            </button>
        </div>
    );
}

export default Home;