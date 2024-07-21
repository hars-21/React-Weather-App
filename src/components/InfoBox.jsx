import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";

function InfoBox({ info }) {
	const INIT_URL =
		"https://images.unsplash.com/photo-1565011761573-09d9db5ccd9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1pc3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
	const HOT_URL =
		"https://images.unsplash.com/photo-1490682143684-14369e18dce8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdCUyMHdlYXRoZXIlMjBuYXR1cmUlMjBkYXl8ZW58MHx8MHx8fDA%3D";
	const COLD_URL =
		"https://images.unsplash.com/photo-1631315124498-41ebb8b10ede?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
	const RAIN_URL =
		"https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJhaW58ZW58MHx8MHx8fDA%3D";

	return (
		<div className="info-box">
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
					image={
						info.humidity > 80
							? RAIN_URL
							: info.temp > 25
							? HOT_URL
							: info.temp < 15
							? COLD_URL
							: INIT_URL
					}
					title={info.weather}
				/>
				<CardContent className="desc">
					<Typography gutterBottom variant="h5" component="div">
						{info.city}, {info.region == "" ? info.country : info.region}
						<span className="weatherIcon">
							{info.humidity > 80 ? (
								<ThunderstormIcon fontSize="large" />
							) : info.temp > 25 ? (
								<WbSunnyIcon fontSize="large" />
							) : info.temp < 15 ? (
								<AcUnitIcon fontSize="large" />
							) : (
								<CloudIcon fontSize="large" />
							)}
						</span>
					</Typography>
					<Typography variant="body2" component={"span"} className="value">
						<p>Temperature: {info.temp}&deg;C</p>
						<p>Humidity: {info.humidity}%</p>
						<p>Wind: {info.wind}km/h</p>
						<p>
							Expect {info.weather} today, where it feels like {info.feelsLike}
							&deg;C
						</p>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default InfoBox;
