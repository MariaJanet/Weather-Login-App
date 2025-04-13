// import React, { useState } from "react";

// const DashboardPage = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");

//   const API_KEY = "2c928b4ca3ca658d5c5caf8fcb82a3e1"; // Get from https://openweathermap.org/api

//   const fetchWeather = async () => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const data = await response.json();
//       if (data.cod === 200) {
//         setWeather(data);
//         setError("");
//       } else {
//         setWeather(null);
//         setError("City not found!");
//       }
//     } catch {
//       setError("Failed to fetch weather");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Weather Dashboard</h2>
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <br /><br />
//       <button onClick={fetchWeather}>Get Weather</button>
//       <br /><br />
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {weather && (
//         <div>
//           <h3>{weather.name}</h3>
//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Condition: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useState } from "react";

const DashboardPage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "2c928b4ca3ca658d5c5caf8fcb82a3e1";

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
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🌤 Weather Dashboard</h2>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchWeather} style={styles.button}>
          Get Weather
        </button>

        {error && <p style={styles.error}>{error}</p>}

        {weather && (
          <div style={styles.result}>
            <h3 style={styles.city}>{weather.name}</h3>
            <p style={styles.info}>🌡 Temperature: {weather.main.temp} °C</p>
            <p style={styles.info}>☁ Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "350px",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    padding: "12px",
    width: "100%",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    width: "100%",
    backgroundColor: "#0072ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  result: {
    backgroundColor: "#f3f3f3",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "10px",
  },
  city: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  info: {
    fontSize: "16px",
    margin: "4px 0",
  },
};

export default DashboardPage;
