import React from 'react';
import { getWeatherCondition } from '../utils/weatherIcons';

function HourlyForecast({ hourly }) {
    const cardStyle = {
        backgroundColor: '#202b3b',
        borderRadius: '20px',
        padding: '24px'
    };

    const listStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '12px',
        overflowX: 'auto',
        paddingTop: '16px'
    };

    const itemStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '12px',
        minWidth: '60px'
    };

    return (
        <div style={cardStyle}>
            <h3 style={{ color: '#939b9f', fontSize: '13px', textTransform: 'uppercase', margin: 0 }}>
                Today's Forecast
            </h3>
            <div style={listStyle}>
                {hourly?.time?.slice(0, 6).map((time, index) => {
                    //   <div key={index} style={itemStyle}>
                    //     <span style={{ color: '#939b9f', fontSize: '13px' }}>
                    //       {new Date(time).getHours()}:00
                    //     </span>
                    //     <span style={{ fontSize: '24px' }}>🌤️</span>
                    //     <span style={{ fontWeight: 'bold' }}>{hourly.temperature_2m[index]}°</span>
                    //   </div>
                    const code = hourly.weather_code?.[index];
                    const condition = getWeatherCondition(code, 1);
                    return (
                        <div key={index} style={itemStyle}>
                            <span style={{ color: '#939b9f', fontSize: '13px' }}>
                                {new Date(time).getHours()}:00
                            </span>
                            <span style={{ fontSize: '28px' }} title={condition.label}>
                                {condition.icon}
                            </span>
                            <span style={{ fontWeight: 'bold' }}>{hourly.temperature_2m[index]}°</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HourlyForecast;