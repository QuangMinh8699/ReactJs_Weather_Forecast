import React, { useEffect, useState } from "react";
import CurrentWeatherForecastApi from "../api/CurrentWeatherForecastApi";

const CurrentWeatherForecast = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("saigon");

  const handleSubmit = () => {
    setCity(input);
  };

  return (
    <>
      <div>
        <CurrentWeatherForecastApi city={city} />
      </div>
      <div>
        <input
          type="text"
          placeholder="Submit city do you want ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </>
  );
};

export default CurrentWeatherForecast;
