import getWeatherData from "./getWeatherData";
import { createWeatherDataContainer } from "../ui/weatherDataContainer";

export async function submitQuery() {
    const input = document.querySelector('.search-input');
    const location = input.value.toLowerCase().split(' ').join('-');
    
    const weatherData = await getWeatherData(location, 'forecast');

    createWeatherDataContainer(weatherData);


}

