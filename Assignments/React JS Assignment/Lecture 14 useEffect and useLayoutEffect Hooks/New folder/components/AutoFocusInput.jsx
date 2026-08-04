import React, { useEffect, useRef } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Automatically focus input element on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 9: Auto Focus Input</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="I am automatically focused!"
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px 0',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '80%',
    borderRadius: '4px',
    border: '1px solid #007bff',
    outline: 'none',
  },
};

export default AutoFocusInput;