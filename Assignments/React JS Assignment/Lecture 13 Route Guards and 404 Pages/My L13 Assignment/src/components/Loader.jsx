import React from 'react';

function Loader() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px',
      fontFamily: 'sans-serif',
      color: '#2563eb',
      margin: '20px'
    },
    text: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.text}>⏳ Loading, please wait...</div>
    </div>
  );
}

export default Loader;