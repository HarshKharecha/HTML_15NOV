import React from 'react';

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  const { name, country, temperature, windspeed, weathercode } = weatherData;

  const styles = {
    card: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '24px',
      padding: '40px',
      color: '#fff',
      textAlign: 'center',
      maxWidth: '420px',
      margin: '0 auto',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
    },
    title: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '4px'
    },
    subtitle: {
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.65)',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    temp: {
      fontSize: '68px',
      fontWeight: '800',
      margin: '15px 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #94a3b8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    detailsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px',
      marginTop: '25px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '20px'
    },
    detailItem: {
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '14px',
      borderRadius: '16px',
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{name}</h2>
      <p style={styles.subtitle}>{country || 'Location'}</p>
      <div style={styles.temp}>{temperature}°C</div>
      <div style={styles.detailsGrid}>
        <div style={styles.detailItem}>
          <strong style={{ display: 'block', marginBottom: '5px', opacity: 0.8 }}>Wind Speed</strong>
          <span>{windspeed} km/h</span>
        </div>
        <div style={styles.detailItem}>
          <strong style={{ display: 'block', marginBottom: '5px', opacity: 0.8 }}>Weather Code</strong>
          <span>Code: {weathercode}</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;