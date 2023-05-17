import { CircularProgress, Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import axios from "./axios";

const api = {
 w: "/data/2.5/weather?q=",
};

const App = () => {
 const [city_name, setCityName] = useState("");
 const [isError, setIsError] = useState(false);
 const [city, setCity] = useState(null);

 const fetchWeather = async (name = "Bishkek") => {
  try {
   let key = "3293ea5c41361dacad10e0a4622a63e1";
   const res = await axios.get(`${api.w}${name}&appid=${key}`);
   console.log("res: ", res.data);
   setIsError(false);
   setCity(res.data);
  } catch (error) {
   console.log("error: ", error.response.status);
   setIsError(true);
  }
 };

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
    }}>
    <CircularProgress />
   </Box>
  );
 }
 return (
  <div>
   <Box
    sx={{
     width: 600,
     m: "0px auto",
     background: "lightblue",
     borderRadius: "12px",
     p: "25px",
     
    }}>
    <Box sx={{ display: "flex" }}>
     <TextField
      placeholder='enter city'
      type='text'
      onChange={e => setCityName(e.target.value.trim())}
      fullWidth
      sx={{ pb: 2 }}
      size='small'
     />
     <Button
      size='small'
      variant='contained'
      onClick={() => {
        if (city_name){
          fetchWeather(city_name);
        }
      }}>
      Seacrh
     </Button>
    </Box>
    <Box>
     {isError ? (
      <h2 style={{ textAlign: "center" }}>City Not Found</h2>
     ) : (
      <>
       <div
        style={{
         display: "flex",
         justifyContent: "space-around",
         alignItems: "center",
        }}>
        <Typography variant='h2'>
         {(city?.main?.temp - 273.15).toFixed()} °C°F
        </Typography>
        <div>
         <img
          src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`}
          alt=''
         />
         <Typography variant='h3' align='center'>
          {city.weather[0].main}
         </Typography>
        </div>
       </div>
       <Box sx={{ pl: 5 }}>
        <Typography variant='h3'>{city.name}</Typography>
        <Typography variant='h5'>
         Влажность: {city.main.humidity}%
        </Typography>
        <Typography variant='h5'>
         Wind: {city.wind.speed}km/h
        </Typography>
       </Box>
      </>
     )}
    </Box>
   </Box>
  </div>
 );
};

export default App;
