import React from 'react';

function AddPost() {
  const styles = {
    pageContainer: {
      fontFamily: 'system-ui, sans-serif',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    heading: {
      color: '#0f172a',
      marginBottom: '20px',
      fontSize: '1.5rem',
      fontWeight: '700'
    },
    formGroup: {
      marginBottom: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#334155'
    },
    input: {
      padding: '10px 12px',
      borderRadius: '6px',
      border: '1px solid #cbd5e1',
      fontSize: '0.9rem',
      fontFamily: 'inherit'
    },
    textarea: {
      padding: '10px 12px',
      borderRadius: '6px',
      border: '1px solid #cbd5e1',
      fontSize: '0.9rem',
      fontFamily: 'inherit',
      minHeight: '150px',
      resize: 'vertical'
    },
    button: {
      backgroundColor: '#0284c7',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      padding: '10px 20px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '8px'
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Post created successfully!');
  };

  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Article Title</label>
          <input style={styles.input} type="text" placeholder="Enter post title..." required />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Category</label>
          <select style={styles.input} required defaultValue="">
            <option value="" disabled>Select category...</option>
            <option value="web-dev">Web Development</option>
            <option value="design">Design & UX</option>
            <option value="backend">Backend & Cloud</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Content</label>
          <textarea style={styles.textarea} placeholder="Write your post content here..." required />
        </div>

        <button type="submit" style={styles.button}>Publish Article</button>
      </form>
    </div>
  );
}

export default AddPost;