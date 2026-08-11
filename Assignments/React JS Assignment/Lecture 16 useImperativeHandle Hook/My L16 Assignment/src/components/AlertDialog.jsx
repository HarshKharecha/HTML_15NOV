import React, { useState, useImperativeHandle, forwardRef } from 'react';

const AlertDialog = forwardRef(function AlertDialog(props, ref) {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState({ title: '', message: '' });

  useImperativeHandle(ref, () => ({
    showAlert(title, message) {
      setConfig({ title, message });
      setVisible(true);
    },
    hideAlert() {
      setVisible(false);
    },
  }));

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
        <h3 style={styles.title}>{config.title || 'Alert'}</h3>
        <p style={styles.message}>{config.message || 'Something happened.'}</p>
        <div style={styles.btnGroup}>
          <button style={styles.cancelBtn} onClick={() => setVisible(false)}>Cancel</button>
          <button style={styles.okBtn} onClick={() => setVisible(false)}>OK</button>
        </div>
      </div>
    </div>
  );
});

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1100,
  },
  dialog: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '1.25rem',
    width: '320px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
  },
  title: {
    margin: '0 0 0.5rem',
    fontSize: '1.1rem',
    color: '#0f172a',
  },
  message: {
    margin: '0 0 1.25rem',
    fontSize: '0.9rem',
    color: '#475569',
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.5rem',
  },
  cancelBtn: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #cbd5e1',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  okBtn: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#dc2626',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AlertDialog;