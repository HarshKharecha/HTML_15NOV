import React from 'react';

function Visibility({ current }) {
  const cardStyle = {
    backgroundColor: '#202b3b',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={cardStyle}>
      <div>
        <span style={{ color: '#939b9f', fontSize: '13px', textTransform: 'uppercase' }}>Visibility & Pressure</span>
        <h3 style={{ margin: '8px 0 0 0' }}>10 km (Clear View)</h3>
      </div>
      <div>
        <span style={{ color: '#939b9f', fontSize: '13px' }}>Pressure</span>
        <h3 style={{ margin: '8px 0 0 0' }}>{current?.surface_pressure} hPa</h3>
      </div>
    </div>
  );
}

export default Visibility;