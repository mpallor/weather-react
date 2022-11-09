import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

function Search(props) {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setCity(response.data.name);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "c2eef394caddc774d676102a41dfb330";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleChange(event) {
    setInputCity(event.target.value);
  }

  let form = (
    <div>
      <h1 className="heading">Weather Forecast</h1>
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Search for a city..."
              autofocus="on"
              autocomplete="off"
              className="form-control search-field"
              onChange={handleChange}
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
              onClick={handleSubmit}
            />
          </div>
          <div className="col-1">
            <a
              className="current-position"
              href="/"
              title="Get Current Location"
            >
              <i className="fa-solid fa-location-crosshairs"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div className="content">
        {form}
        <h2 className="cityName">{city}</h2>
        <ul className="weatherList">
          <li>Temperature: {Math.round(temperature)} °C </li>
          <li>description: {description}</li>
          <li>Wind: {Math.round(wind)} km/h </li>
          <li>Humidity: {Math.round(humidity)} % </li>
          <li>
            <img src={icon} alt="weather description" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

export default Search;
