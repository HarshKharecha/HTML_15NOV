import React, { useLayoutEffect } from 'react';

function ScrollToTop() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    }
  }

  // Task 17: Synchronously scroll to top before render paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      <h3>Task 17: Scroll to Top Component</h3>
      <p>Page automatically scrolled to top on mount.</p>
    </div>
  );
}

export default ScrollToTop;