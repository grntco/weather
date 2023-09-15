import { updateContent } from "./updateContent";
import getWeatherData from "../app/getWeatherData";

export function getCurrentScale() {
    if (!document.querySelector('.search-error').classList.contains('visible')) {
        const currentScale = [ ...document.querySelector('.current-temp').firstElementChild.textContent.split('')].pop().toLowerCase();
        return currentScale;
    }
}

export function createScaleToggleBtn(scale) {
    const btn = document.createElement('button');
    btn.className = 'scale-toggle-btn';
    btn.textContent = `C°`;

    return btn
}

export async function toggleScale() {
    if (document.querySelector('.widget-grid')) {
        const currentScale = getCurrentScale();
        const newScale = currentScale === 'c' ? 'f' : 'c';
        const currentLocation = document.querySelector('.location').textContent;
        const scaleBtn = document.querySelector('.scale-toggle-btn');
    
        scaleBtn.textContent = `${currentScale.toUpperCase()}°`
        updateContent(await getWeatherData(currentLocation), newScale);
    }
}


