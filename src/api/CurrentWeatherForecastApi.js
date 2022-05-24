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
      <ul>
        <div>{!city ? "Vui long nhap thanh pho" : city}</div>
        {dataArray.map((city) => (
          <div key={city.id}>{city.name}</div>
        ))}
      </ul>
      <div>{error}</div>
    </>
  );
};

export default CurrentWeatherForecastApi;
