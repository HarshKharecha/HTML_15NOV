import React from 'react';

function Sidebar() {
  const sidebarStyle = {
    width: '88px',
    height: '95vh',
    backgroundColor: '#202b3b',
    borderRadius: '20px',
    margin: '16px 0 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 0',
    position: 'sticky',
    top: '16px'
  };

  const logoStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#0095ff',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 8px 16px rgba(0,149,255,0.3)'
  };

  const menuGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    alignItems: 'center'
  };

  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#939b9f',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    transition: '0.3s'
  };

  const activeIconStyle = {
    ...iconButtonStyle,
    color: '#ffffff'
  };

  return (
    <aside style={sidebarStyle}>
      <div style={logoStyle}>☁️</div>
      <div style={menuGroupStyle}>
        <button style={activeIconStyle}>
          <span>🌤️</span>
          <span style={{ fontSize: '11px' }}>Weather</span>
        </button>
        <button style={iconButtonStyle}>
          <span>🏙️</span>
          <span style={{ fontSize: '11px' }}>Cities</span>
        </button>
        <button style={iconButtonStyle}>
          <span>🗺️</span>
          <span style={{ fontSize: '11px' }}>Map</span>
        </button>
      </div>
      <div>
        <button style={iconButtonStyle}>⚙️</button>
      </div>
    </aside>
  );
}

export default Sidebar;