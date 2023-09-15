import getWeatherData from "../app/getWeatherData";
import { createSearchForm }  from "./searchForm";
import { updateContent } from "./updateContent";
import { createSearchError } from "./searchError";
import { createScaleToggleBtn } from "./scale";

export default async function createMainView(location, scale) {
    const mainView = document.body.appendChild(document.createElement('div'));
    const header = mainView.appendChild(document.createElement('div'));

    mainView.className = 'main-view';
    header.className = 'main-header';
    
    header.appendChild(createSearchForm());
    header.appendChild(createScaleToggleBtn());
    mainView.appendChild(createSearchError());

    updateContent(await getWeatherData(location), scale)

    setTimeout(function() {
        mainView.classList.add('entered');
    }, 300)
};