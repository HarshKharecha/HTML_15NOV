import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000'); // Connect to Socket.io backend

function RApp() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = "http://localhost:5000/api";

  useEffect(() => {
    // 1. Fetch initial state on load
    axios.get(`${BACKEND_URL}/state`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading receiver data:", err));

    // 2. Listen for real-time updates from WebSocket server
    socket.on('stateUpdate', (updatedData) => {
      setData(updatedData);
    });

    return () => {
      socket.off('stateUpdate');
    };
  }, []);

  if (loading) return <div className="loading">Connecting to LED Receiver Stream...</div>;

  const rooms = data?.user1?.room || {};

  return (
    <div className="receiver-app">
      <header className="receiver-header">
        <h1>💡 Live LED Status Receiver (MongoDB + WebSockets)</h1>
        <div className="live-indicator">
          <span className="pulse-dot"></span> Real-Time Connected
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

export default RApp;