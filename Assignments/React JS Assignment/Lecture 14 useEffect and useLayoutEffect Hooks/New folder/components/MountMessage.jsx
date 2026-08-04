import React, { useEffect } from 'react';

function MountMessage() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []); // Empty dependency array ensures execution only once on mount

  return (
    <div style={styles.container}>
      <h2>Task 1: Mount Message</h2>
      <p>Check the browser console to see the mount log!</p>
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
};

export default MountMessage;