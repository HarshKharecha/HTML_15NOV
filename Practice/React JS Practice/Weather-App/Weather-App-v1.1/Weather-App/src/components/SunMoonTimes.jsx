import React from 'react';

function SunMoonTimes({ daily }) {
  const cardStyle = {
    backgroundColor: '#202b3b',
    borderRadius: '20px',
    padding: '24px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  };

  const sunrise = daily?.sunrise?.[0] ? new Date(daily.sunrise[0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A';
  const sunset = daily?.sunset?.[0] ? new Date(daily.sunset[0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A';

  return (
    <div style={cardStyle}>
      <div>
        <h4 style={{ color: '#939b9f', margin: '0 0 8px 0' }}>🌅 Sunrise & Sunset</h4>
        <p style={{ margin: '4px 0' }}>Sunrise: <b>{sunrise}</b></p>
        <p style={{ margin: '4px 0' }}>Sunset: <b>{sunset}</b></p>
      </div>
      <div>
        <h4 style={{ color: '#939b9f', margin: '0 0 8px 0' }}>🌙 Moonrise & Moonset</h4>
        <p style={{ margin: '4px 0' }}>Moonrise: <b>08:45 PM</b></p>
        <p style={{ margin: '4px 0' }}>Moonset: <b>06:12 AM</b></p>
      </div>
    </div>
  );
}

export default SunMoonTimes;