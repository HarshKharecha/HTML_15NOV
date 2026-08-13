import React, { useState, useId } from 'react';
import { ACTIONS } from '../constants/actionTypes';

function TaskForm({ dispatch, formTitle = "Create Task" }) {
    const styles = {
        form: {
            backgroundColor: '#ffffff',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
        },
        title: { margin: 0, color: '#334155' },
        field: { display: 'flex', flexDirection: 'column', gap: '4px' },
        label: { fontSize: '12px', fontWeight: 'bold', color: '#64748b' },
        input: { padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' },
        select: { padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' },
        button: {
            padding: '8px',
            backgroundColor: '#16a34a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
    };
    
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Medium');

    const titleId = useId();
    const priorityId = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        dispatch({
            type: ACTIONS.ADD_TASK,
            payload: { title, priority, id: Date.now() },
        });

        setTitle('');
        setPriority('Medium');
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <h4 style={styles.title}>{formTitle}</h4>
            <div style={styles.field}>
                <label htmlFor={titleId} style={styles.label}>Task Title:</label>
                <input
                    id={titleId}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task name..."
                    style={styles.input}
                />
            </div>

            <div style={styles.field}>
                <label htmlFor={priorityId} style={styles.label}>Priority:</label>
                <select
                    id={priorityId}
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    style={styles.select}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            <button type="submit" style={styles.button}>Add Task</button>
        </form>
    );
}

export default TaskForm;