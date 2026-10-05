import React from 'react';

function AirConditions({ current }) {
  const cardStyle = {
    backgroundColor: '#202b3b',
    borderRadius: '20px',
    padding: '24px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginTop: '16px'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ color: '#939b9f', fontSize: '13px', textTransform: 'uppercase', margin: 0 }}>
        Air Conditions
      </h3>
      <div style={gridStyle}>
        <div>
          <span style={{ color: '#939b9f', fontSize: '14px' }}>Real Feel</span>
          <h2 style={{ margin: '4px 0 0 0' }}>{current?.apparent_temperature}°C</h2>
        </div>
        <div>
          <span style={{ color: '#939b9f', fontSize: '14px' }}>Wind Speed</span>
          <h2 style={{ margin: '4px 0 0 0' }}>{current?.wind_speed_10m} km/h</h2>
        </div>
        <div>
          <span style={{ color: '#939b9f', fontSize: '14px' }}>Humidity</span>
          <h2 style={{ margin: '4px 0 0 0' }}>{current?.relative_humidity_2m}%</h2>
        </div>
        <div>
          <span style={{ color: '#939b9f', fontSize: '14px' }}>UV Index</span>
          <h2 style={{ margin: '4px 0 0 0' }}>{current?.uv_index || '3'} (Moderate)</h2>
        </div>
      </div>
    </div>
  );
}

export default AirConditions;