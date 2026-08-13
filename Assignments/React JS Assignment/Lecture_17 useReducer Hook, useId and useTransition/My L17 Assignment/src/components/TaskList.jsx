import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, dispatch }) {
    const styles = {
        list: { display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '450px', overflowY: 'auto' },
        empty: { textAlign: 'center', padding: '20px', color: '#94a3b8', backgroundColor: '#fff', borderRadius: '6px' },
        info: { fontSize: '11px', color: '#0284c7', fontStyle: 'italic', marginBottom: '4px' },
    };

    if (tasks.length === 0) {
        return <div style={styles.empty}>No tasks found.</div>;
    }

    // Slice performance optimization for huge arrays
    const visibleTasks = tasks.slice(0, 100);

    return (
        <div style={styles.list}>
            {tasks.length > 100 && (
                <div style={styles.info}>
                    Showing first 100 of {tasks.length.toLocaleString()} matching records...
                </div>
            )}
            {visibleTasks.map((task) => (
                <TaskItem key={task.id} task={task} dispatch={dispatch} />
            ))}
        </div>
    );
}

export default TaskList;