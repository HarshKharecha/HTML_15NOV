import React, { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [displayFeedback, setDisplayFeedback] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '16px' },
    label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box' },
    textarea: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', minHeight: '80px' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff', transition: 'all 0.2s' },
    reviewBox: { marginTop: '20px', backgroundColor: '#fafafa', border: '1px dashed #cbd5e1', borderRadius: '8px', padding: '16px' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayFeedback({ name, feedback });
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 4: Feedback Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Your Name</label>
          <input type="text" style={styles.input} placeholder="Anonymous or Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Suggestions / Feedback</label>
          <textarea style={styles.textarea} placeholder="Write your thoughts..." value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        </div>
        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Submit Feedback
        </button>
      </form>

      {displayFeedback && (
        <div style={styles.reviewBox}>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155', italic: 'true' }}>
            <strong>{displayFeedback.name}:</strong> "{displayFeedback.feedback}"
          </p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;