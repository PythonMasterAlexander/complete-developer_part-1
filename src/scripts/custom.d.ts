/* To use custom TYPES universally in your project(directory) you can define
 them in a type declaration files like this one which uses .d.ts file
 extension.

	Follow a simple rule of thumb: Every time we use a object, we should consider
	using a custom type or interface. 

	If the object is a function parameter, we will create a custom interface. If we 
	use this particular object more than once, we'll create a custom type.
*/

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
