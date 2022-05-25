import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrentWeatherForecastApi = ({ city }) => {
  const [dataArray, setDataArray] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a54302f65a72d1b9d27992c82333cf9e`;
        const res = await axios.get(url);
        const data = res.data;
        setDataArray([data]);
        setError("");
      } catch (err) {
        console.log("err", err);
        setError("Khong tim thay ten thanh pho");
      }
    };

    fetchApi();
  }, [city]);

  return (
    <>
      <div className="content">
        <div className="content--header">
          {dataArray.map((city) => (
            <div key={city.id}>{city.name}</div>
          ))}
        </div>
        <div className="content--data">
          {/* COORD */}
          <div className="weather__data content__coord">
            <div className="weather__data--header">Coord</div>
            <div className="weather__data--content">
              {dataArray.map((city) => (
                <div key={city.id}>
                  <div>Lon: {city.coord.lon}</div>
                  <div>Lat: {city.coord.lat}</div>
                </div>
              ))}
            </div>
          </div>
          {/* WEATHER */}
          <div className="weather__data content__weather">
            <div className="weather__data--header">Weather</div>
            <div className="weather__data--content">
              {dataArray.map((city) => (
                <div key={city.id}>
                  {city.weather.map((weather) => (
                    <div key={weather.id}>
                      <div>Main: {weather.main}</div>
                      <div>Description: {weather.description}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* MAIN */}
          <div className="weather__data content__main">
            <div className="weather__data--header">Main</div>
            <div className="weather__data--content">
              {dataArray.map((city) => (
                <div key={city.id}>
                  <div>temp: {Math.floor(city.main.temp - 273.15)}</div>
                  <div>temp min: {Math.floor(city.main.temp_min - 273.15)}</div>
                  <div>temp max: {Math.floor(city.main.temp_max - 273.15)}</div>
                  <div>
                    feels like: {Math.floor(city.main.feels_like - 273.15)}
                  </div>
                  <div>humidity: {city.main.humidity}%</div>
                </div>
              ))}
            </div>
          </div>
          {/* WIND */}
          <div className="weather__data content__wind">
            <div className="weather__data--header">Wind</div>
            <div className="weather__data--content">
              {dataArray.map((city) => (
                <div key={city.id}>
                  <div>speed: {city.wind.speed}</div>
                  <div>deg: {city.wind.deg}</div>
                </div>
              ))}
            </div>
          </div>
          {/* CLOUD */}
          <div className="weather__data content__cloud">
            <div className="weather__data--header">Cloud</div>
            <div className="weather__data--content">
              {dataArray.map((city) => (
                <div key={city.id}>
                  <div>all: {city.clouds.all}</div>
                </div>
              ))}
            </div>
          </div>
          {/* SYS */}
          <div className="weather__data content__sys">
            <div className="weather__data--header">Sys</div>
            <div className="weather__data--content">
              {dataArray.map((city) => (
                <div key={city.id}>
                  <div>type: {city.sys.type}</div>
                  <div>country: {city.sys.country}</div>
                  <div>id: {city.sys.id}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeatherForecastApi;
