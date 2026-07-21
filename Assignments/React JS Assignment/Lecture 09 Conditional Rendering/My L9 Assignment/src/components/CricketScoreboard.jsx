import React from 'react';

function CricketScoreboard() {
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
        displayBox: {
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            fontWeight: '600',
            color: '#1e293b'
        }
    };

    const matchStarted = true;

    const renderScoreboard = () => {
        if (matchStarted) {
            return "Live Score: IND 184/3 (18.2 overs)";
        } else {
            return "Match Yet to Start";
        }
    };

    return (
        <div style={styles.mainContainer}>
            <h3 style={styles.heading}>Task 19: Cricket Scoreboard</h3>
            <div style={styles.displayBox}>
                {renderScoreboard()}
            </div>
        </div>
    );
}

export default CricketScoreboard;