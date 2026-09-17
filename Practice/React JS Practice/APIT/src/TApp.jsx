import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function TApp() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = "http://localhost:5000/api";

  // Fetch initial state from backend/MongoDB
  useEffect(() => {
    axios.get(`${BACKEND_URL}/state`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching state:", err));
  }, []);

  // Handle Button Click to Toggle Switch
  const handleToggle = async (roomName, switchKey) => {
    const currentState = data.user1.room[roomName][switchKey];
    const newState = !currentState;

    // Optimistic UI update locally
    const updatedData = JSON.parse(JSON.stringify(data));
    updatedData.user1.room[roomName][switchKey] = newState;
    setData(updatedData);

    // Send update to Backend -> MongoDB -> Broadcast to Receiver
    try {
      await axios.post(`${BACKEND_URL}/update`, {
        room: roomName,
        switchKey: switchKey,
        status: newState
      });
    } catch (err) {
      console.error("Failed to sync with backend:", err);
    }
  };

  if (loading) return <div className="loading">Loading Transmitter Panel...</div>;

  const rooms = data?.user1?.room || {};

  return (
    <div className="App">
      <h1>Smart Home Transmitter Dashboard</h1>
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

export default TApp;