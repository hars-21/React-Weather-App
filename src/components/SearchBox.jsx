import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

function SearchBox({ updateInfo }) {
	let [city, setCity] = useState("");
	let [error, setError] = useState(false);

	const API_URL = "https://api.weatherapi.com/v1/current.json";
	const API_KEY = import.meta.env.VITE_API_KEY;

	let getWeatherInfo = async () => {
		try {
			let response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
			let jsonResponse = await response.json();
			let result = {
				city: jsonResponse.location.name,
				region: jsonResponse.location.region,
				country: jsonResponse.location.country,
				weather: jsonResponse.current.condition.text,
				temp: jsonResponse.current.temp_c,
				humidity: jsonResponse.current.humidity,
				wind: jsonResponse.current.wind_kph,
				feelsLike: jsonResponse.current.feelslike_c,
			};
			return result;
		} catch (err) {
			throw err;
		}
	};

	let firstWeatherInfo = async () => {
		try {
			let response = await fetch(`${API_URL}?key=${API_KEY}&q=New%20Delhi`);
			let jsonResponse = await response.json();
			let result = {
				city: jsonResponse.location.name,
				region: jsonResponse.location.region,
				country: jsonResponse.location.country,
				weather: jsonResponse.current.condition.text,
				temp: jsonResponse.current.temp_c,
				humidity: jsonResponse.current.humidity,
				wind: jsonResponse.current.wind_kph,
				feelsLike: jsonResponse.current.feelslike_c,
			};
			return result;
		} catch (err) {
			throw err;
		}
	};

	useEffect(() => {
		async function initWeatherInfo() {
			let newInfo = await firstWeatherInfo();
			updateInfo(newInfo);
		}
		initWeatherInfo();
	}, []);

	let handleChange = (event) => {
		setCity(event.target.value);
	};

	let handleSubmit = async (event) => {
		try {
			event.preventDefault();
			let newInfo = await getWeatherInfo();
			updateInfo(newInfo);
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="searchBox">
			<form onSubmit={handleSubmit}>
				<TextField
					id="city"
					label="City Name"
					variant="outlined"
					required
					value={city}
					onChange={handleChange}
				/>
				<br />
				<br />
				<Button variant="contained" type="Submit">
					Search
				</Button>
				{error && <p style={{ color: "red" }}>City not found!</p>}
			</form>
		</div>
	);
}

export default SearchBox;
