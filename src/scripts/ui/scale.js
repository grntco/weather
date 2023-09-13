import { updateContent } from "./updateContent";
import getWeatherData from "../app/getWeatherData";

export function getCurrentScale() {
    const currentScale = [ ...document.querySelector('.current-temp').firstElementChild.textContent.split('')].pop().toLowerCase();
    return currentScale;
}

export function createScaleToggleBtn() {
    const btn = document.createElement('button');
    btn.className = 'scale-toggle-btn';
    btn.textContent = 'F/C';

    return btn
}

export async function toggleScale() {
    const currentScale = getCurrentScale();
    const newScale = currentScale === 'c' ? 'f' : 'c';
    const currentLocation = document.querySelector('.location').textContent;
    updateContent(await getWeatherData(currentLocation), newScale);
}


