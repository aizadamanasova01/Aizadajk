import { Typography, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "../axios";

const api = {
  w: "/data/2.5/weather?q=",
};

//&appid={API key}

const App = () => {
  const [city_name, setCityName] = useState("Bishkek");
  const [city, setCity] = useState(null);

  const fetchWeather = async (name = "Bishek") => {
    try {
    let key = "3293ea5c41361dacad10e0a4622a63e1";
    const res = await axios.get(`${api.w}${city_name}&appid=${key}`);
    console.log("res:", res.data);
    setCity(res.data);
    } catch(error) {
      
    }
    console.log("res: ", res.data);
    
  
  }
  useEffect(() => {
    fetchWeather();
  }, []);
  if (city === null) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!city) {
    return <h2>Loading ... </h2>;
  }

  return (
    <div>
      <Box
        sx={{
          width: 600,
          m: "0px audo",
          background: "lightblue",
          borderRadius: "12px",
          p: "25px",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          weather app
        </Typography>
        <Box>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography variant="h2">
              {(city.main.temp - 273.15).toFixed()} °C°F
            </Typography>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
                alt=""
              />
            </div>
          </div>
          <Typography variant="h3">{city.name}</Typography>
          <Typography variant="h5">Вериятность осадков: 81%</Typography>
          <Typography variant="h5">Влажность: {city.main.humidity}</Typography>
          <Typography variant="h5">Wind: {city.wind.speed}km/h</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default App;


