import { createSearchForm }  from "./searchForm";
import { createWeatherDataContainer } from "./weatherDataContainer";

export default function createMainView() {
    const mainView = document.body.appendChild(document.createElement('div'));
    mainView.className = 'main-view';

    mainView.appendChild(createSearchForm());
    // mainView.appendChild(createWeatherDataContainer());
};