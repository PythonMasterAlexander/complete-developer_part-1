import fetch from "node-fetch";

const routeHello = (): string => "On port /hello";

const routeAPINames = async (): Promise<string> => {
		const url = "https://www.usemodernfullstack.dev/api/v1/users";
		let data: responseItemType[];

		try {
				const response = await fetch(url);
				data = (await response.json()) as responseItemType[];
		} catch (error) {
						return error;
		}

		const names = data.map((item) => `id: ${item.id}, name: ${item.name}`).join("<br>");
		return names;
};

const routeWeather = (query: WeatherQueryInterface): weatherDetailType => 
		queryWeatherData(query);

const queryWeatherData = (query: WeatherQueryInterface): weatherDetailType => {
		return {
				zipcode: query.zipcode,
				weather: "sunny",
				temp: 35
		};
};
export { routeHello, routeAPINames, routeWeather };
