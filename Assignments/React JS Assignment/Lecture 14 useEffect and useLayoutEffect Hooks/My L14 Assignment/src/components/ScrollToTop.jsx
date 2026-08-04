import React, { useLayoutEffect } from 'react';

function ScrollToTop() {
  // Task 17: Synchronously scroll to top before render paint
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
      <h3>Task 17: Scroll to Top Component</h3>
      <p>Page automatically scrolled to top on mount.</p>
    </div>
  );
}

export default ScrollToTop;