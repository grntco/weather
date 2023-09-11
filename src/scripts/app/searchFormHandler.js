import getWeatherData from "./getWeatherData";
import { createWeatherDataContainer } from "../ui/weatherDataContainer";

export function submitQuery() {
    const input = document.querySelector('.search-input');
    const location = input.value.toLowerCase().split(' ').join('-');
    
    const weatherData = getWeatherData(location, 'forecast');

    createWeatherDataContainer(weatherData);
}

