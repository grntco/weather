import getWeatherData from "../app/getWeatherData";
import { createSearchForm }  from "./searchForm";
import { updateContent } from "./updateContent";
import { createWidgetGrid } from "./widgets/widgetGrid";
import { createSearchError } from "./searchError";

export default async function createMainView() {
    const mainView = document.body.appendChild(document.createElement('div'));
    mainView.className = 'main-view';
    
    mainView.appendChild(createSearchForm());
    mainView.appendChild(createSearchError())

    updateContent(await getWeatherData('Greenville, South Carolina'), 'f')

    setTimeout(function() {
        mainView.classList.add('entered');
    }, 250)
};