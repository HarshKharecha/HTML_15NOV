import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://mocki.io/v1/f6adc40a-cdba-4487-94a9-34113cbbe1d6";

  // 1. Fetch initial data from API
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 2. Handle switch toggle function
  const handleToggle = async (roomName, switchKey) => {
    // Create a deep copy of the current data state to update immutably
    const updatedData = JSON.parse(JSON.stringify(data));
    
    // Toggle the specific switch state (true <-> false)
    const currentState = updatedData.user1.room[roomName][switchKey];
    const newState = !currentState;
    updatedData.user1.room[roomName][switchKey] = newState;

    // Update UI immediately for responsiveness
    setData(updatedData);

    // 3. Push update to the API
    try {
      const response = await fetch(API_URL, {
        method: 'PUT', // Use 'POST' or 'PUT' depending on your backend API configuration
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room: roomName,
          switch: switchKey,
          status: newState
        }),
      });

      if (!response.ok) {
        console.error("Failed to update status on the server");
      } else {
        console.log(`Successfully updated ${roomName} -> ${switchKey} to ${newState}`);
      }
    } catch (err) {
      console.error("Error connecting to API:", err);
    }
  };

  if (loading) return <div className="loading">Loading rooms and switches...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const rooms = data?.user1?.room || {};

  return (
    <div className="App">
      <h1>Smart Home Dashboard</h1>
      <div className="rooms-container">
        {Object.keys(rooms).map((roomName) => {
          const switches = rooms[roomName];
          return (
            <div className="room-card" key={roomName}>
              <h2>{roomName}</h2>
              <div className="switches-container">
                {Object.keys(switches).map((switchKey) => {
                  const isOn = switches[switchKey];
                  return (
                    <div className="switch-row" key={switchKey}>
                      <span className="switch-label">{switchKey.toUpperCase()}</span>
                      <button
                        className={`toggle-btn ${isOn ? 'on' : 'off'}`}
                        onClick={() => handleToggle(roomName, switchKey)}
                      >
                        {isOn ? 'TURN OFF' : 'TURN ON'}
                      </button>
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

export default App;