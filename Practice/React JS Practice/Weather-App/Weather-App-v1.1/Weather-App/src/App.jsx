import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import WeeklyForecast from './components/WeeklyForecast';
import RadarMap from './components/RadarMap';
import AirConditions from './components/AirConditions';
import Visibility from './components/Visibility';
import SunMoonTimes from './components/SunMoonTimes';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationName, setLocationName] = useState('Ahmedabad, India');
  const [coords, setCoords] = useState({ lat: 23.0225, lon: 72.5714 });
  const [loading, setLoading] = useState(false);

  // Helper function to validate and parse Lat/Lon input
  const parseCoordinates = (input) => {
    const regex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)[,\s]+[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    if (regex.test(input.trim())) {
      const parts = input.trim().split(/[,\s]+/);
      return {
        lat: parseFloat(parts[0]),
        lon: parseFloat(parts[1])
      };
    }
    return null;
  };

  // Open-Meteo API માંથી હવામાન ડેટા મેળવવો
  const fetchWeatherData = async (lat, lon) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,surface_pressure,wind_speed_10m,uv_index&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  // GeoCoding API દ્વારા સિટી કે વિલેજ શોધવું
  const handleSearch = async (query) => {
    if (!query || !query.trim()) return;

    const coordMatch = parseCoordinates(query);

    if (coordMatch) {
      // 📍 1. Latitude / Longitude Direct Search
      const { lat, lon } = coordMatch;
      setCoords({ lat, lon });

      try {
        const revRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        const revData = await revRes.json();
        const place =
          revData.address?.city ||
          revData.address?.town ||
          revData.address?.village ||
          revData.address?.county ||
          "Selected Location";
        setLocationName(`${place}${revData.address?.country ? `, ${revData.address.country}` : ''}`);
      } catch (e) {
        setLocationName(`Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`);
      }

      fetchWeatherData(lat, lon);
    } else {
      // 🏙️ 2. Text Search (City, Country, Village)
      try {
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`
        );
        const geoData = await geoRes.json();
        if (geoData.results && geoData.results.length > 0) {
          const place = geoData.results[0];
          const newCoords = { lat: place.latitude, lon: place.longitude };
          setCoords(newCoords);
          setLocationName(`${place.name}${place.country ? `, ${place.country}` : ''}`);
          fetchWeatherData(place.latitude, place.longitude);
        } else {
          alert("City, Village, or Coordinates not found!");
        }
      } catch (err) {
        console.error("Search Error:", err);
      }
    }
  };

  // Current Location મેળવવી
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setCoords({ lat, lon });

        try {
          const revRes = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );
          const revData = await revRes.json();
          const city = revData.address?.city || revData.address?.town || revData.address?.village || "Current Location";
          setLocationName(`${city}${revData.address?.country ? `, ${revData.address.country}` : ''}`);
        } catch (e) {
          setLocationName("Current Location");
        }

        fetchWeatherData(lat, lon);
      });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  // આ ફંક્શન સીધું SearchBar ના સજેશનમાંથી લોકેશન લેશે
  // const handleSelectLocation = ({ name, lat, lon }) => {
  //   setLocationName(name);
  //   setCoords({ lat, lon });
  //   fetchWeatherData(lat, lon); // ગૂગલ મેપ જેવા જ એક્યુરેટ Weather Details મળશે
  // };

  useEffect(() => {
    fetchWeatherData(coords.lat, coords.lon);
  }, []);

  const appStyle = {
    display: 'flex',
    backgroundColor: '#0b131e',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Inter', sans-serif",
    overflowX: 'hidden'
  };

  const mainContentStyle = {
    flex: 1,
    padding: '24px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '1600px',
    margin: '0 auto'
  };

  const dashboardGridStyle = {
    display: 'grid',
    gridTemplateColumns: '2.2fr 1fr',
    gap: '24px'
  };

  const leftColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  return (
    <div style={appStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <SearchBar onSearch={handleSearch} onCurrentLocation={handleCurrentLocation} />
        {/* <SearchBar onSelectLocation={handleSelectLocation} onCurrentLocation={handleCurrentLocation} /> */}

        {loading ? (
          <div style={{ color: '#939b9f', padding: '40px', textAlign: 'center' }}>Loading weather details...</div>
        ) : weatherData ? (
          <div style={dashboardGridStyle}>
            {/* Left Main Dashboard */}
            <div style={leftColumnStyle}>
              <CurrentWeather locationName={locationName} data={weatherData.current} />
              <HourlyForecast hourly={weatherData.hourly} />
              <AirConditions current={weatherData.current} />
              <Visibility current={weatherData.current} />
              <SunMoonTimes daily={weatherData.daily} />
            </div>

            {/* Right Dashboard Panels */}
            <div style={rightColumnStyle}>
              <WeeklyForecast daily={weatherData.daily} />
              <RadarMap lat={coords.lat} lon={coords.lon} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;