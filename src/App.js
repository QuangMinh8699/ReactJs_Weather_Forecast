import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CurrentWeatherForecast from "./components/CurrentWeatherForecast";

const App = () => {
  return (
    <>
      <div className="App">
        <CurrentWeatherForecast />
      </div>
    </>
  );
};

export default App;
