import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

const CustomInput = forwardRef(function CustomInput({ placeholder }, ref) {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current?.focus();
    },
    clearInput() {
      setValue('');
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
    getValue() {
      return value;
    },
  }));

  return (
    <div style={styles.container}>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder || 'Enter value...'}
        style={styles.input}
      />
    </div>
  );
});

const styles = {
  container: {
    margin: '0.5rem 0',
  },
  input: {
    width: '100%',
    padding: '0.6rem 0.8rem',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
};

export default CustomInput;