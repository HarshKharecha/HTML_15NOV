import React from 'react';

function RadarMap({ lat, lon }) {
  const containerStyle = {
    backgroundColor: '#202b3b',
    borderRadius: '20px',
    padding: '20px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const iframeStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '12px'
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ color: '#939b9f', fontSize: '13px', textTransform: 'uppercase', margin: 0 }}>
        Radar & Weather Map
      </h3>
      <iframe
        title="Weather Map"
        style={iframeStyle}
        src={`https://maps.google.com/maps?q=${lat},${lon}&z=9&output=embed`}
      />
    </div>
  );
}

export default RadarMap;