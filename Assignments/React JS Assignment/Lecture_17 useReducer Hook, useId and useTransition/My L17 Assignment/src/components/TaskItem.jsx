import React from 'react';
import { ACTIONS } from '../constants/actionTypes';

function TaskItem({ task, dispatch }) {
    const styles = {
        card: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 14px',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            border: '1px solid #e2e8f0',
        },
        left: { display: 'flex', alignItems: 'center', gap: '10px' },
        text: { fontSize: '14px', color: '#1e293b' },
        right: { display: 'flex', alignItems: 'center', gap: '8px' },
        badge: {
            padding: '2px 8px',
            borderRadius: '10px',
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#0f172a',
        },
        deleteBtn: {
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ef4444',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
    };

    const getBadgeColor = (priority) => {
        switch (priority) {
            case 'High': return '#f87171';
            case 'Medium': return '#fbbf24';
            default: return '#4ade80';
        }
    };

    return (
        <div style={{ ...styles.card, opacity: task.completed ? 0.6 : 1 }}>
            <div style={styles.left}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() =>
                        dispatch({ type: ACTIONS.TOGGLE_COMPLETE, payload: { id: task.id } })
                    }
                />
                <span
                    style={{
                        ...styles.text,
                        textDecoration: task.completed ? 'line-through' : 'none',
                    }}
                >
                    {task.title}
                </span>
            </div>

            <div style={styles.right}>
                <span style={{ ...styles.badge, backgroundColor: getBadgeColor(task.priority) }}>
                    {task.priority}
                </span>
                <button
                    style={styles.deleteBtn}
                    onClick={() =>
                        dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id } })
                    }
                >
                    ✕
                </button>
            </div>
        </div>
    );
}

export default TaskItem;