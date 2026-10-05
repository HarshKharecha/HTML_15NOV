import React from 'react';
import { getWeatherCondition } from '../utils/weatherIcons';

function CurrentWeather({ locationName, data }) {
    const condition = getWeatherCondition(data?.weather_code, data?.is_day);

    const cardStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '32px',
        borderRadius: '20px',
        backgroundColor: '#202b3b'
    };

    return (
        <div style={cardStyle}>
            <div>
                <h2 style={{ fontSize: '28px', margin: '0 0 8px 0' }}>{locationName}</h2>
                <p style={{ color: '#939b9f', margin: '0 0 4px 0', fontSize: '15px' }}>
                    Condition: <b style={{ color: '#fff' }}>{condition.label}</b>
                </p>
                <p style={{ color: '#939b9f', margin: 0 }}>Apparent Temp: {data?.apparent_temperature}°C</p>
                <h1 style={{ fontSize: '56px', margin: '24px 0 0 0', fontWeight: 'bold' }}>
                    {data?.temperature_2m}°C
                </h1>
            </div>
            {/* <div style={{ fontSize: '80px' }}>☀️</div> */}
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '72px', lineHeight: '1' }}>{condition.icon}</div>
                <span style={{ fontSize: '13px', color: '#939b9f', marginTop: '8px', display: 'block' }}>
                    {condition.label}
                </span>
            </div>
        </div>
    );
}

export default CurrentWeather;