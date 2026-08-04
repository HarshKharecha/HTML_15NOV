import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(30);

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      margin: '10px 0',
    },
    timesup: {
      fontSize: '1.25rem',
      color: timeLeft === 0 ? '#ef4444' : '#0f172a'
    }
  }

  // Task 4: Countdown logic stopping at 0 with cleanup
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div style={styles.container}>
      <h3>Task 4: Countdown Timer</h3>
      <p style={styles.timesup}>
        {timeLeft > 0 ? `Time Remaining: ${timeLeft}s` : "⏳ Time's up!"}
      </p>
    </div>
  );
}

export default CountdownTimer;