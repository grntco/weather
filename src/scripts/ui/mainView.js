import getWeatherData from "../app/getWeatherData";
import { createSearchForm }  from "./searchForm";
import { updateContent } from "./updateContent";
import { createWidgetGrid } from "./widgets/widgetGrid";

export default async function createMainView() {
    const mainView = document.body.appendChild(document.createElement('div'));
    mainView.className = 'main-view';

    mainView.appendChild(createSearchForm());
    updateContent(await getWeatherData('Greenville, South Carolina'), 'f')

    setTimeout(function() {
        mainView.classList.add('entered');
    }, 250)
};