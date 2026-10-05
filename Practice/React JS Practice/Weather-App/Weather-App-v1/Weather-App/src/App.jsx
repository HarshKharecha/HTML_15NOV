import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Open-Meteo દ્વારા નામ પરથી Lat/Lon મેળવવું (City, Village, Country)
  const fetchWeatherByQuery = async (cityName) => {
    try {
      setLoading(true);
      setError('');
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('Location not found!');
      }

      const { latitude, longitude, name, country } = geoData.results[0];
      fetchWeatherByCoords(latitude, longitude, name, country);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
      setLoading(false);
    }
  };

  // Lat/Lon દ્વારા વેધર ડેટા મેળવવો
  const fetchWeatherByCoords = async (lat, lon, cityName, countryName) => {
    try {
      setLoading(true);
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      const weatherResData = await weatherRes.json();

      setWeatherData({
        name: cityName,
        country: countryName,
        temperature: weatherResData.current_weather.temperature,
        windspeed: weatherResData.current_weather.windspeed,
        weathercode: weatherResData.current_weather.weathercode
      });
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch weather data.');
      setLoading(false);
    }
  };

  // Current Location મેળવવા માટે Geolocation API
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeatherByCoords(lat, lon, 'Current Location', '');
        },
        () => {
          setError('Unable to retrieve your location');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  };

  // બાય ડિફોલ્ટ પેજ લોડ થાય ત્યારે અમદાવાદનું વેધર બતાવીએ
  useEffect(() => {
    fetchWeatherByQuery('Ahmedabad');
  }, []);

  const appStyles = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    fontFamily: "'Inter', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  return (
    <div style={appStyles}>
      <h1 style={{ color: '#fff', marginBottom: '25px', fontSize: '2.5rem', fontWeight: '800', textAlign: 'center' }}>
        SkyPulse Weather 🌤️
      </h1>
      
      <SearchBar onSearch={fetchWeatherByQuery} onCurrentLocation={handleCurrentLocation} />

      {loading && <p style={{ color: '#94a3b8', fontSize: '18px' }}>Loading weather details...</p>}
      {error && <p style={{ color: '#f87171', fontSize: '16px' }}>{error}</p>}

      {!loading && !error && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App