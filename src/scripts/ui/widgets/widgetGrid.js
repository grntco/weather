import format from "date-fns/format";
import { createWindWidget } from "./wind";
import { createAQIWidget } from "./aqi";
import { createFeelsWidget } from "./feels";
import { createSunWidget } from "./sun";
import { createLocationWidget } from "./location";
import { createPrecipWidget } from "./precipitation";
import { createForecastWidget } from "./forecast";

export function createWidgetGrid(data, scale) {
    const widgetGrid = document.createElement('div');
    widgetGrid.className = 'widget-grid';

    widgetGrid.append(
        createLocationWidget(data, scale),
        createFeelsWidget(data, scale),
        createAQIWidget(data),
        createWindWidget(data, scale),
        createSunWidget(data),
        createPrecipWidget(data),
        createForecastWidget(data, scale)
    );

    return widgetGrid;
};