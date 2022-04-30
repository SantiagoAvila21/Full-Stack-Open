

const Weather = ({weather, country}) => {
    return (
        <>
            <h2>Weather in {country}</h2>
            <p>Temperature {weather.main.temp} Celsius </p>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Temp icon" />
            <p>Wind {weather.wind.speed} m/s </p>
        </>
    );
}

export default Weather;
