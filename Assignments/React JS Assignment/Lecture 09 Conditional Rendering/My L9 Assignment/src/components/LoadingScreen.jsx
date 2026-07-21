import React from 'react';

function LoadingScreen() {
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
        displayBox: (isLoading) => ({
            backgroundColor: isLoading ? '#fef3c7' : '#dcfce7',
            color: isLoading ? '#92400e' : '#15803d',
            border: `1px solid ${isLoading ? '#fde68a' : '#86efac'}`,
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '600'
        })
    };

    const loading = false;

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 8: Loading Screen</h3>
            <div style={styles.displayBox(loading)}>
                {loading ? "Loading..." : "Data Loaded Successfully"}
            </div>
        </div>
    );
}

export default LoadingScreen;