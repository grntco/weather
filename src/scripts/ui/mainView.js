import getWeatherData from "../app/getWeatherData";
import { createSearchForm }  from "./searchForm";
import { createWeatherDataContainer } from "./weatherDataContainer";

export default async function createMainView() {
    const mainView = document.body.appendChild(document.createElement('div'));
    mainView.className = 'main-view';

    mainView.appendChild(createSearchForm());
    mainView.appendChild(createWeatherDataContainer(await getWeatherData('Greenville, South Carolina')));
};