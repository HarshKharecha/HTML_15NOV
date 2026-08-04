import React, { useLayoutEffect } from 'react';

function ScrollToTop() {
  useLayoutEffect(() => {
    // Scrolls to top synchronously before the frame is painted to eliminate visual jump
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Task 17: Auto Scroll to Top</h2>
      <p>This component forces the viewport to top-left (0, 0) immediately on load.</p>
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

export default ScrollToTop;