import React from 'react';
import { useFormStatus } from 'react-dom';

const styles = {
  button: {
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '0.5rem'
  },
  disabled: {
    backgroundColor: '#475569',
    cursor: 'not-allowed'
  }
};

function SubmitButton() {
  // Reads status directly from parent form context in React 19
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{ ...styles.button, ...(pending ? styles.disabled : {}) }}
    >
      {pending ? 'Submitting Task...' : 'Add Task'}
    </button>
  );
}

export default SubmitButton;