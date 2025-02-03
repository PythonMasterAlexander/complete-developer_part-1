type responseItemType = {
		id: string;
		name: string;
};

type weatherDetailType = {
		zipcode: string;
		weather: string;
		temp?: number;
};

interface WeatherQueryInterface {
		zipcode: string;
}
