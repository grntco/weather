import getWeatherData from "../app/getWeatherData";
import { createSearchForm }  from "./searchForm";
import { createWidgetGrid } from "./widgets/widgetGrid";

export default async function createMainView() {
    const mainView = document.body.appendChild(document.createElement('div'));
    mainView.className = 'main-view';

    mainView.appendChild(createSearchForm());
    mainView.appendChild(createWidgetGrid(await getWeatherData('Greenville, South Carolina'), 'f'));

    mainView.classList.add('entered');
};