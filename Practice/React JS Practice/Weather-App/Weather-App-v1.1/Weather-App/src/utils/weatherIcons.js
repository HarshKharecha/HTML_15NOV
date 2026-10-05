// Map WMO Weather Interpretation Codes to custom icons/emojis and descriptive labels
export const getWeatherCondition = (code, isDay = 1) => {
  switch (code) {
    // Clear & Mainly Clear
    case 0:
      return {
        icon: isDay ? '☀️' : '🌙',
        label: 'Clear Sky',
        themeColor: '#ffa500'
      };
    case 1:
      return {
        icon: isDay ? '🌤️' : '🌙',
        label: 'Mainly Clear',
        themeColor: '#ffb703'
      };
    case 2:
      return {
        icon: '⛅',
        label: 'Partly Cloudy',
        themeColor: '#8ecae6'
      };

    // Cloudy & Overcast
    case 3:
      return {
        icon: '☁️',
        label: 'Overcast / Cloudy',
        themeColor: '#90a4ae'
      };

    // Fog, Haze, Smoke & Dust
    case 45:
      return {
        icon: '🌫️',
        label: 'Foggy',
        themeColor: '#78909c'
      };
    case 48:
      return {
        icon: '🚬', // or 💨 / 🌫️ for Smoke/Haze
        label: 'Depositing Rime Fog / Smoke',
        themeColor: '#607d8b'
      };

    // Drizzle & Light Rain
    case 51:
    case 53:
    case 55:
      return {
        icon: '🌦️',
        label: 'Drizzle',
        themeColor: '#4fc3f7'
      };

    // Rain & Heavy Rain
    case 61:
    case 63:
    case 65:
      return {
        icon: '🌧️',
        label: 'Rainy',
        themeColor: '#0288d1'
      };

    // Freezing Rain
    case 66:
    case 67:
      return {
        icon: '🧊🌧️',
        label: 'Freezing Rain',
        themeColor: '#29b6f6'
      };

    // Snow
    case 71:
    case 73:
    case 75:
    case 77:
      return {
        icon: '❄️',
        label: 'Snowfall',
        themeColor: '#e0f7fa'
      };

    // Rain Showers
    case 80:
    case 81:
    case 82:
      return {
        icon: '🌦️',
        label: 'Rain Showers',
        themeColor: '#03a9f4'
      };

    // Thunderstorm
    case 95:
    case 96:
    case 99:
      return {
        icon: '🌩️',
        label: 'Thunderstorm',
        themeColor: '#f57c00'
      };

    default:
      return {
        icon: '🌡️',
        label: 'Unknown',
        themeColor: '#0095ff'
      };
  }
};