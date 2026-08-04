import React, { useState, useLayoutEffect } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  // Task 18: Dynamic width adjustment prior to paint
  useLayoutEffect(() => {
    const timer = setTimeout(() => setProgress(75), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
      <h3>Task 18: Animated Progress Bar</h3>
      <div style={{ width: '100%', backgroundColor: '#e2e8f0', borderRadius: '10px', height: '20px', overflow: 'hidden' }}>
        <div 
          style={{ 
            width: `${progress}%`, 
            backgroundColor: '#2563eb', 
            height: '100%', 
            transition: 'width 0.5s ease-in-out' 
          }} 
        />
      </div>
      <p style={{ marginTop: '8px' }}>Progress: {progress}%</p>
    </div>
  );
}

export default ProgressBar;