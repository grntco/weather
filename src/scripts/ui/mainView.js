import getWeatherData from "../app/getWeatherData";
import { createSearchForm }  from "./searchForm";
import { updateContent } from "./updateContent";
import { createWidgetGrid } from "./widgets/widgetGrid";
import { createSearchError } from "./searchError";
import { createScaleToggleBtn } from "./scale";

export default async function createMainView() {
    const mainView = document.body.appendChild(document.createElement('div'));
    mainView.className = 'main-view';

    const header = mainView.appendChild(document.createElement('div'));
    header.className = 'main-header';
    
    header.appendChild(createSearchForm());
    header.appendChild(createScaleToggleBtn());
    mainView.appendChild(createSearchError())

    updateContent(await getWeatherData('Greenville, South Carolina'), 'f')

    setTimeout(function() {
        mainView.classList.add('entered');
    }, 250)
};