import React, { useState } from "react";
import "./App.css";
import Today from "./Today";
import Icon from "./Icon";

const api = {
  key: "90696144c5c39e1d85b4f3fda924ea14",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const time = new Date();
  let hours = time.getHours();

  return (
    <div className={hours > 19 ? "App night" : "App"}>
      <div className="container">
        <div className="app-header">
          <input
            type="search"
            className="search"
            placeholder="Seach a city"
            name="search"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
            autoComplete="off"
          />
        </div>
        <div className="app-content">
          {typeof weather.main !== "undefined" ? (
            <div>
              <div className="location text-center">
                <h3 className="md-text">
                  {weather.name}, {weather.sys.country}
                </h3>
              </div>
              <Today />
              <div className="weather text-center">
                <Icon />
                <div className="weather-temp bg-text">
                  {Math.round(weather.main.temp)}
                  <sup>o</sup>C
                </div>
                <div className="weather-type md-text">
                  {weather.weather[0].main}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div className="location text-center">
                  <h3 className="md-text">New Delhi, IN</h3>
                </div>
                <Today />
                <div className="weather text-center">
                  <Icon />
                  <div className="weather-temp bg-text">
                    30<sup>o</sup>C
                  </div>
                  <div className="weather-type md-text">Sunny</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
