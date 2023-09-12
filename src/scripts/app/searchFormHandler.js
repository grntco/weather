import getWeatherData from "./getWeatherData";
import { createWidgetGrid } from "../ui/widgets/widgetGrid";
import { changeBackground } from "../ui/background";

export async function submitQuery() {
    const input = document.querySelector('.search-input');
    const location = input.value.toLowerCase().split(' ').join('-');
    const mainView = document.querySelector('.main-view');
    const weatherData = await getWeatherData(location);

    mainView.removeChild(document.querySelector('.widget-grid'));
    mainView.appendChild(createWidgetGrid(weatherData, 'f'));
    changeBackground(weatherData);
}

