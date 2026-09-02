import React, { useDeferredValue } from 'react';
import FeedbackForm from './FeedbackForm';

const styles = {
  container: { marginTop: '1rem' },
  card: {
    backgroundColor: '#1e293b',
    padding: '1rem',
    borderRadius: '6px',
    marginBottom: '0.75rem',
    borderLeft: '4px solid #2563eb'
  },
  title: { margin: 0, color: '#fff' },
  desc: { margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.875rem' },
  feedbackList: { margin: '0.5rem 0 0 0', paddingLeft: '1rem', listStyle: 'none' },
  feedbackItem: {
    backgroundColor: '#0f172a',
    padding: '0.4rem 0.6rem',
    borderRadius: '4px',
    marginBottom: '0.25rem',
    fontSize: '0.85rem',
    color: '#e2e8f0'
  },
  author: { color: '#38bdf8', fontWeight: 'bold' },
  adminBadge: { color: '#ef4444', fontWeight: 'bold' }
};

function TaskList({ tasks, searchQuery, taskFeedbacks, onAddTaskFeedback, canAddFeedback }) {
  const deferredSearch = useDeferredValue(searchQuery);

  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      t.description.toLowerCase().includes(deferredSearch.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h3 style={{ color: '#fff' }}>Tasks ({filteredTasks.length})</h3>
      {filteredTasks.map((task) => (
        <div key={task.id} style={styles.card}>
          <h4 style={styles.title}>{task.title}</h4>
          <p style={styles.desc}>{task.description}</p>

          {/* Feedback Display with Author Names */}
          {taskFeedbacks[task.id] && (
            <ul style={styles.feedbackList}>
              {taskFeedbacks[task.id].map((fb, idx) => (
                <li key={idx} style={styles.feedbackItem}>
                  <span style={fb.role === 'admin' ? styles.adminBadge : styles.author}>
                    {fb.author} ({fb.role}):
                  </span>{' '}
                  {fb.text}
                </li>
              ))}
            </ul>
          )}

          {canAddFeedback && (
            <FeedbackForm targetId={task.id} onAddFeedback={onAddTaskFeedback} />
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;