	import axios from "axios";

const instanse = axios.create({
	baseURL: "https://api.openweathermap.org",
});

export default instanse;
