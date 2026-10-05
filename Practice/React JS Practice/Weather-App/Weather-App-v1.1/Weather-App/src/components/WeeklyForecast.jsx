import React from 'react';
import { getWeatherCondition } from '../utils/weatherIcons';

function WeeklyForecast({ daily }) {
    const cardStyle = {
        backgroundColor: '#202b3b',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #2e3b4e'
    };

    return (
        <div style={cardStyle}>
            <h3 style={{ color: '#939b9f', fontSize: '13px', textTransform: 'uppercase', margin: 0 }}>
                7-Day Forecast
            </h3>
            <div>
                {daily?.time?.slice(0, 7).map((date, index) => {
                    //   <div key={index} style={rowStyle}>
                    //     <span style={{ color: '#939b9f', width: '80px' }}>
                    //       {index === 0 ? 'Today' : new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                    //     </span>
                    //     <span style={{ fontSize: '20px' }}>🌧️</span>
                    //     <span style={{ fontWeight: 'bold' }}>
                    //       {daily.temperature_2m_max[index]}° / <span style={{ color: '#939b9f' }}>{daily.temperature_2m_min[index]}°</span>
                    //     </span>
                    //   </div>
                    const code = daily.weather_code?.[index];
                    const condition = getWeatherCondition(code, 1);
                    return (
                        <div key={index} style={rowStyle}>
                            <span style={{ color: '#939b9f', width: '80px' }}>
                                {index === 0 ? 'Today' : new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '22px' }}>{condition.icon}</span>
                                <span style={{ fontSize: '12px', color: '#939b9f', width: '90px' }}>
                                    {condition.label}
                                </span>
                            </div>
                            <span style={{ fontWeight: 'bold' }}>
                                {daily.temperature_2m_max[index]}° / <span style={{ color: '#939b9f' }}>{daily.temperature_2m_min[index]}°</span>
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default WeeklyForecast;