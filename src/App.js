import React from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CurrentWeatherForecast from "./components/CurrentWeatherForecast";

const App = () => {
  window.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "F11") {
      e.preventDefault();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "F12") {
      e.preventDefault();
    }
  });

  return (
    <>
      <div className="App">
        <CurrentWeatherForecast />
      </div>
    </>
  );
};

export default App;
