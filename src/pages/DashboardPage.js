import React, { useState } from "react";

const DashboardPage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "2c928b4ca3ca658d5c5caf8fcb82a3e1"; // Get from https://openweathermap.org/api

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
        setError("");
      } else {
        setWeather(null);
        setError("City not found!");
      }
    } catch {
      setError("Failed to fetch weather");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather Dashboard</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br /><br />
      <button onClick={fetchWeather}>Get Weather</button>
      <br /><br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
