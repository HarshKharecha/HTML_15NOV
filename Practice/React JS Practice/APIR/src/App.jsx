import React, { useState, useEffect } from 'react';
import './App.css';

function ReceiverApp() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://mocki.io/v1/f6adc40a-cdba-4487-94a9-34113cbbe1d6";

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch real-time data');
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Poll the API every 2 seconds to receive live updates from the transmitter
  useEffect(() => {
    fetchData(); // Fetch immediately on load
    const interval = setInterval(() => {
      fetchData();
    }, 2000); // Poll every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  if (loading && !data) return <div className="loading">Connecting to Receiver Stream...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const rooms = data?.user1?.room || {};

  return (
    <div className="receiver-app">
      <header className="receiver-header">
        <h1>💡 Live Receiver & LED Status Monitor</h1>
        <div className="live-indicator">
          <span className="pulse-dot"></span> Live Syncing
        </div>
      </header>

      <div className="rooms-container">
        {Object.keys(rooms).map((roomName) => {
          const switches = rooms[roomName];
          return (
            <div className="room-card" key={roomName}>
              <h2>{roomName}</h2>
              <div className="led-grid">
                {Object.keys(switches).map((switchKey) => {
                  const isOn = switches[switchKey]; // true or false
                  return (
                    <div 
                      key={switchKey} 
                      className={`led-badge ${isOn ? 'led-on' : 'led-off'}`}
                    >
                      <span className="switch-name">{switchKey.toUpperCase()}</span>
                      <div className="led-light"></div>
                      <span className="status-text">
                        {isOn ? 'LED ON' : 'LED OFF'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReceiverApp;