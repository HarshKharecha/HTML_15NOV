import React from 'react';
import { useAuth } from '../context/AuthContext';
import FeedbackForm from './FeedbackForm';

const styles = {
  container: {
    backgroundColor: '#1e293b',
    padding: '1.25rem',
    borderRadius: '8px',
    marginTop: '1.5rem'
  },
  card: {
    backgroundColor: '#0f172a',
    padding: '0.75rem',
    borderRadius: '6px',
    marginBottom: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  actions: { display: 'flex', gap: '0.5rem' },
  btnBlock: {
    padding: '0.3rem 0.6rem',
    backgroundColor: '#d97706',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  btnDelete: {
    padding: '0.3rem 0.6rem',
    backgroundColor: '#dc2626',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  fbText: { color: '#94a3b8', fontSize: '0.85rem' }
};

function UserManagement({ userFeedbacks, onAddUserFeedback }) {
  const { usersList, blockUser, deleteUser } = useAuth();

  return (
    <div style={styles.container}>
      <h3 style={{ color: '#fff', margin: '0 0 1rem 0' }}>Admin: User Management</h3>
      {usersList.map((u) => (
        <div key={u.id} style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: u.isBlocked ? '#ef4444' : '#fff' }}>
              {u.name} {u.isBlocked && '(BLOCKED)'}
            </span>
            <div style={styles.actions}>
              <button style={styles.btnBlock} onClick={() => blockUser(u.id)}>
                {u.isBlocked ? 'Unblock' : 'Block'}
              </button>
              <button style={styles.btnDelete} onClick={() => deleteUser(u.id)}>
                Delete
              </button>
            </div>
          </div>

          <FeedbackForm targetId={u.id} onAddFeedback={onAddUserFeedback} />

          {userFeedbacks[u.id] && (
            <ul style={{ margin: '0.25rem 0', paddingLeft: '1.2rem' }}>
              {userFeedbacks[u.id].map((fb, i) => (
                <li key={i} style={styles.fbText}>
                  <strong style={{ color: '#ef4444' }}>{fb.author}:</strong> {fb.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserManagement;