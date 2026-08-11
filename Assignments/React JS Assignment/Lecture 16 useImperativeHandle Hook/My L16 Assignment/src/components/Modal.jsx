import React, { useState, useImperativeHandle, forwardRef } from 'react';

const Modal = forwardRef(function Modal({ title, children }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal() {
      setIsOpen(true);
    },
    closeModal() {
      setIsOpen(false);
    },
  }));

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modalContent}>
        <div style={styles.header}>
          <h3 style={styles.title}>{title || 'Modal Title'}</h3>
          <button style={styles.closeIcon} onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        <div style={styles.body}>{children}</div>
        <div style={styles.footer}>
          <button style={styles.btn} onClick={() => setIsOpen(false)}>Close</button>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '450px',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '0.5rem',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
  },
  closeIcon: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#64748b',
  },
  body: {
    padding: '1rem 0',
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderTop: '1px solid #e2e8f0',
    paddingTop: '0.5rem',
  },
  btn: {
    padding: '0.4rem 1rem',
    backgroundColor: '#64748b',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Modal;