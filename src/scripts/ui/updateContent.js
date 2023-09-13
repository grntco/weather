import { createWidgetGrid } from "./widgets/widgetGrid";
import { updateBackground } from './background';

export function updateContent(data, scale) {
    const mainView = document.querySelector('.main-view');
    if (document.querySelector('.widget-grid')) {
        mainView.removeChild(document.querySelector('.widget-grid'));
    }
    mainView.appendChild(createWidgetGrid(data, scale));
    updateBackground(data);
}