import { Intro } from "./components/intro";
import "./App.css";
import { Cities } from "./components/cities";
import { useState } from "react";
import { Weather } from "./components/weather";

function App() {
	const [location, setLocation] = useState("N/A");
	const [temp, setTemp] = useState("N/A");
	const [realfeel, setRealfeel] = useState("N/A");
	const [status, setStatus] = useState("N/A");
	const [icon, setIcon] = useState("N/A");

	const update = async (value) => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=it&appid=1c582b571ca6edae9bb407ef23816e25`;
		console.log(url);

		const res = await fetch(url);
		const data = await res.json();
		console.log(data);

		setLocation(data.name);
		setTemp(Math.round(data.main.temp) - 273,5);
		setRealfeel(Math.round(data.main.feels_like) - 273,5);
		setStatus(data.weather[0].description);
		setIcon(data.weather[0].icon);
	};

	return (
		<main className="container">
			<Intro />
			<Cities notify={update} />
			<Weather
				location={location}
				temp={temp}
				status={status}
				realfeel={realfeel}
				icon={icon}
			/>
		</main>
	);
}

export default App;
