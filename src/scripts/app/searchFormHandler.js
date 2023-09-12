import getWeatherData from "./getWeatherData";
import { createWidgetGrid } from "../ui/widgets/widgetGrid";

export async function submitQuery() {
    const input = document.querySelector('.search-input');
    const location = input.value.toLowerCase().split(' ').join('-');
    
    const weatherData = await getWeatherData(location);

    createWidgetGrid(weatherData);
}

