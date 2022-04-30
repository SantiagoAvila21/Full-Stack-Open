import { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from './Weather'

const Country = ( {country} ) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common.toLowerCase()}&appid=${api_key}&units=metric`)
            .then(response => {
            const data = response.data;
            setWeather(data);
        });    
    },[country,api_key]);

    if(weather.main === undefined) return ;
    else return (
        <>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map(language => {
                    return (
                        <li key = {language}> {language} </li>
                    );
                })}
            </ul>
            <img src={country.flags.png} alt={country.name.common + "flag"} />
            <Weather weather={weather} country={country.name.common}/>
        </>
    );
}

export default Country;