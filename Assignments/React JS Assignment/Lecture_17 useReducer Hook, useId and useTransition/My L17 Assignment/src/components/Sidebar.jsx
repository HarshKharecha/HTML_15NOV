import React from 'react';
import { ACTIONS } from '../constants/actionTypes';

function Sidebar({ dispatch, totalTasks }) {
    const styles = {
        sidebar: {
            width: '240px',
            backgroundColor: '#0f172a',
            color: '#f8fafc',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
        },
        heading: {
            margin: '0 0 8px 0',
            fontSize: '16px',
            color: '#f0f0f0',
        },
        metric: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
        },
        btn: {
            padding: '10px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
    };

    const handleGenerateLargeDataset = () => {
        const dummyTasks = Array.from({ length: 5000 }, (_, index) => ({
            id: `bulk-${Date.now()}-${index}`,
            title: `Generated Enterprise Task #${index + 1}`,
            priority: index % 3 === 0 ? 'High' : index % 2 === 0 ? 'Medium' : 'Low',
            completed: index % 5 === 0,
        }));

        dispatch({ type: ACTIONS.BULK_ADD, payload: { tasks: dummyTasks } });
    };

    return (
        <aside style={styles.sidebar}>
            <h3 style={styles.heading}>Navigation</h3>
            <div style={styles.metric}>
                <span>Total Records:</span>
                <strong>{totalTasks.toLocaleString()}</strong>
            </div>
            <button style={styles.btn} onClick={handleGenerateLargeDataset}>
                ⚡ Load 5,000 Tasks
            </button>
        </aside>
    );
}

export default Sidebar;