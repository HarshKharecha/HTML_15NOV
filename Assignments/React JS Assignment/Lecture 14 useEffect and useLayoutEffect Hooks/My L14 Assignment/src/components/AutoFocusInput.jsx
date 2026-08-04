import React, { useRef, useEffect, useState } from 'react';

function AutoFocusInput() {
  const [isFocused, setIsFocused] = useState(false);

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px'
    },
    input: {
      padding: '10px',
      width: '80%',
      borderRadius: '8px',
      border: `2px solid ${isFocused ? '#007bff' : '#cbd5e1'}`,
      outline: 'none',
    },
  };

  const inputRef = useRef(null);

  // Task 9: Auto focus on input component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h3>Task 9: Auto Focus Input</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Focused automatically on mount..."
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}

export default AutoFocusInput;