import format from "date-fns/format";
import { createWindWidget } from "./widgets/wind";
import { createAQIWidget } from "./widgets/aqi";
import { createFeelsWidget } from "./widgets/feels";
import { createSunWidget } from "./widgets/sun";

export function createWeatherDataContainer(data, scale) {
    const weatherDataContainer = document.createElement('div');
    weatherDataContainer.className = 'weather-data-container';

    function createPrimaryDataContainer(data) {
        const primaryWeatherContainer = document.createElement('div');
        primaryWeatherContainer.className = 'primary-data-container';

        // Time and date and condition (data.location.localtime, then some date-fns function for just the time out of a date obj);

        const condition = primaryWeatherContainer.appendChild(document.createElement('p'));
        condition.className = 'condition';

        const localTime = format(new Date(data.location.localtime), 'p').toLowerCase();
        const conditionText = data.current.condition.text.toLowerCase();
        const date = format(new Date(data.location.localtime), 'EEEE, MMMM d');
        condition.textContent = `It's currently ${localTime} and ${conditionText} on ${date}.`;

        // Location

        const location = primaryWeatherContainer.appendChild(document.createElement('div'));
        location.className = 'location';
        const region = data.location.country !== "United States of America" ? data.location.country : data.location.region;
        location.textContent = `${data.location.name}, ${region}`;

        // Current temperature container with icon and current temperature | maybe not a container

        // const icon = primaryWeatherContainer.appendChild(document.createElement('img'));
        // icon.className = 'current-temp-icon';
        // icon.src = data.current.condition.icon;

        const currentTemp = primaryWeatherContainer.appendChild(document.createElement('div'));
        currentTemp.className = 'current-temp';
        currentTemp.textContent = `${Math.round(data.current.temp_f)}°`;

        // H and L container w/ H and L

        const highLowContainer = primaryWeatherContainer.appendChild(document.createElement('div'));
        highLowContainer.className = 'high-low-container';

        const highTemp = highLowContainer.appendChild(document.createElement('div'));
        const highTempValue = Math.round(data.forecast.forecastday[0].day.maxtemp_f);
        highTemp.textContent = `H: ${highTempValue}°`;

        const lowTemp = highLowContainer.appendChild(document.createElement('div'));
        const lowTempValue = Math.round(data.forecast.forecastday[0].day.mintemp_f);
        lowTemp.textContent = `L: ${lowTempValue}°`
        
        return primaryWeatherContainer;
    }

    function createSecondaryDataContainer(data) {
        const secondaryDataContainer = document.createElement('div');
        secondaryDataContainer.className = 'secondary-data-container';

        secondaryDataContainer.append(createWindWidget(data), createAQIWidget(data), createFeelsWidget(data), createSunWidget(data));

        return secondaryDataContainer;
    }

    weatherDataContainer.append(createPrimaryDataContainer(data), createSecondaryDataContainer(data));

    return weatherDataContainer;
    const mainView = document.querySelector('.main-view');
    mainView.appendChild(weatherDataContainer);
};

// Maybe separate out initial display of elements, or structuring of elements, and a function that just updates their values (i.e., refreshContent)