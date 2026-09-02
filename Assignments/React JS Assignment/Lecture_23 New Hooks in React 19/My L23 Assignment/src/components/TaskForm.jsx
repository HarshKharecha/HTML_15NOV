import React, { useActionState } from 'react';
import SubmitButton from './SubmitButton';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '1.5rem'
  },
  input: {
    padding: '0.6rem',
    borderRadius: '4px',
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    color: '#fff'
  },
  error: { color: '#ef4444', fontSize: '0.875rem' },
  success: { color: '#22c55e', fontSize: '0.875rem' }
};

function TaskForm({ onAddTask }) {
  // Server action logic
  async function submitTaskAction(prevState, formData) {
    const title = formData.get('title');
    const description = formData.get('description');

    if (!title) {
      return { error: 'Task title is required!', success: false };
    }

    // Simulate Server Request (Task 9 & 10)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulated network error check (Task 10)
    if (title.toLowerCase().includes('error')) {
      return { error: 'Server Rejected Task! (Rollback Triggered)', success: false };
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      status: 'Pending',
      date: new Date().toLocaleDateString()
    };

    onAddTask(newTask);
    return { error: null, success: true, message: 'Task added successfully!' };
  }

  const [state, formAction] = useActionState(submitTaskAction, { error: null, success: false });

  return (
    <form action={formAction} style={styles.form}>
      <h3 style={{ margin: 0, color: '#fff' }}>Create New Task</h3>
      <input name="title" placeholder="Task Title" style={styles.input} />
      <input name="description" placeholder="Description" style={styles.input} />

      {state?.error && <span style={styles.error}>{state.error}</span>}
      {state?.success && <span style={styles.success}>{state.message}</span>}

      <SubmitButton />
    </form>
  );
}

export default TaskForm;