import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(null);

  const styles = {
    mainContainer: { padding: '24px', border: '1px solid #e2e8f0', borderRadius: '12px', margin: '20px', backgroundColor: '#f8fafc', fontFamily: 'sans-serif', maxWidth: '500px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' },
    heading: { color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', margin: '0 0 20px 0', fontSize: '1.3rem', fontWeight: '700' },
    inputGroup: { marginBottom: '16px' },
    label: { display: 'block', marginBottom: '6px', fontSize: '0.85rem', fontWeight: '600', color: '#475569' },
    input: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none' },
    textarea: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', boxSizing: 'border-box', outline: 'none', minHeight: '100px', resize: 'vertical' },
    button: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#2563eb', color: '#ffffff', transition: 'all 0.2s' },
    successBox: { marginTop: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '16px', color: '#166534' }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData);
  };

  return (
    <div style={styles.mainContainer}>
      <h3 style={styles.heading}>Task 3: Contact Us Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input type="text" name="name" style={styles.input} value={formData.name} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email Address</label>
          <input type="email" name="email" style={styles.input} value={formData.email} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Message</label>
          <textarea name="message" style={styles.textarea} value={formData.message} onChange={handleChange} required />
        </div>
        <button 
          type="submit" 
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <div style={styles.successBox}>
          <h4 style={{ margin: '0 0 8px 0' }}>✉ Message Logs Registered</h4>
          <p style={{ margin: '4px 0', fontSize: '0.9rem' }}><strong>From:</strong> {submitted.name} ({submitted.email})</p>
          <p style={{ margin: '4px 0', fontSize: '0.9rem' }}><strong>Content:</strong> {submitted.message}</p>
        </div>
      )}
    </div>
  );
}

export default ContactUs;