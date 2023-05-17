import axios from "axios";

const instanse = axios.create({
    baseURL:  "https://api.openweathermap.org",
});

export default instanse

//data/2.5/weather?q={city name}&appid={API key}