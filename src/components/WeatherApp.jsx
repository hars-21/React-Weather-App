import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function WeatherApp() {
	const [weatherInfo, setWeatherInfo] = useState({
		city: "--",
		region: "--",
		country: "--",
		feelsLike: "--",
		humidity: "--",
		temp: "--",
		weather: "--",
		wind: "--",
	});

	let updateInfo = (newInfo) => {
		setWeatherInfo(newInfo);
	};

	return (
		<div>
			<h1>Weather App</h1>
			<SearchBox updateInfo={updateInfo} />
			<InfoBox info={weatherInfo} />
		</div>
	);
}

export default WeatherApp;
