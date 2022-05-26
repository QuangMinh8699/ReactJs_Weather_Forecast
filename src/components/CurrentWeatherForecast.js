import React, { useState } from "react";
import CurrentWeatherForecastApi from "../api/CurrentWeatherForecastApi";
import "../css/Container.css";

const CurrentWeatherForecast = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("saigon");
  const [error, setError] = useState("none");

  const handleSubmit = () => {
    if (input === "") {
      setError("0.2vw solid #FF4949");
    } else {
      setError("none");
    }
    setCity(input);
  };

  return (
    <div className="container">
      <div className="container__form">
        <div className="container__form--inside">
          <div className="form__header">weather forecast</div>
          <div className="form__input">
            <div className="form__input--text">
              <input
                className="input--text"
                type="text"
                placeholder="Your city"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ border: error, transition: "0.25s" }}
              />
            </div>
            <div className="form__input--button">
              <input
                type="button"
                className="input--button"
                value="Search"
                onClick={handleSubmit}
              />
            </div>
          </div>
          <div className="form__footer">
            <a
              href="https://github.com/QuangMinh8699"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="form__footer--bi bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/quangminh8699/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="form__footer--bi bi bi-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/minh8699/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="form__footer--bi bi bi-facebook"></i>
            </a>
            <a
              href="https://openweathermap.org/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="form__footer--bi bi bi-brightness-high-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <CurrentWeatherForecastApi city={city} />
    </div>
  );
};

export default CurrentWeatherForecast;
