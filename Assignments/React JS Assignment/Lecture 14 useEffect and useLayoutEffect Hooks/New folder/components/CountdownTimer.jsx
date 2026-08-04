import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div style={styles.container}>
      <h2>Task 4: Countdown Timer</h2>
      <div style={styles.timerDisplay}>
        {timeLeft > 0 ? `${timeLeft}s` : "Time's up!"}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '10px 0',
    textAlign: 'center',
  },
  timerDisplay: {
    fontSize: '28px',
    color: '#d9534f',
    fontWeight: 'bold',
  },
};

export default CountdownTimer;