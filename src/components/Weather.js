import React from 'react';

const Weather = props => {
    const { temperature, city, country, humidity, description, error } = props;
    return(
        <div>
            { city && country && <p>Location: {city}, {country}</p> }
            { temperature && <p>Temperature: {temperature}</p> }
            { humidity && <p>Humidity: {humidity}</p> }
            { description && <p>Conditions: {description}</p> }
            { error && <p>{error}</p> }
        </div>
    );
}

export default Weather;