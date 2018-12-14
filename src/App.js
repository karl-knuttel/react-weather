import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'c89a2b4b0fab1f1f17dc0da4c4d84f47';

class App extends React.Component {
    state = {
        temperature: undefined,
        city       : undefined,
        country    : undefined,
        humidity   : undefined,
        description: undefined,
        error      : undefined
    }

    getWeather = async (e) => {
        e.preventDefault();

        const city    = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => {
                if ( city && country ) {
                    // console.log(data);
            
                    this.setState({
                        temperature: data.main.temp,
                        city       : data.name,
                        country    : data.sys.country,
                        humidity   : data.main.humidity,
                        description: data.weather[0].description,
                        error      : undefined
                    });
                } else {
                    this.setState({
                        temperature: undefined,
                        city       : undefined,
                        country    : undefined,
                        humidity   : undefined,
                        description: undefined,
                        error      : 'Please enter a city and country'
                    });
                }
            })
            .catch(err => Error('Caught error: ', err));
    }

    render() {

        return(
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather 
                    temperature = {this.state.temperature}
                    city        = {this.state.city}
                    country     = {this.state.country}
                    humidity    = {this.state.humidity}
                    description = {this.state.description}
                    error       = {this.state.error}
                />
            </div>
        );
    }
}

export default App;