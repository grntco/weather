export function createWeatherDataContainer(data) {
    const weatherDataContainer = document.createElement('div');
    weatherDataContainer.className = 'weather-data-container';

    function createPrimaryDataContainer(data) {
        const primaryWeatherContainer = document.createElement('div');
        primaryWeatherContainer.className = 'primary-data-container';

        // Time and date and condition (data.location.localtime, then some date-fns function for just the time out of a date obj);

        const condition = primaryWeatherContainer.appendChild(document.createElement('div'));
        condition.className = 'condition';
        condition.textContent = `It's currently 11:00 a.m. and sunny on Monday, September 13.`;

        // Location

        const location = primaryWeatherContainer.appendChild(document.createElement('div'));
        location.className = 'location';
        location.textContent = `Greenville, SC`;

        // Current temperature container with icon and current temperature | maybe not a container

        const currentTemp = primaryWeatherContainer.appendChild(document.createElement('div'));
        currentTemp.className = 'current-temp';
        currentTemp.textContent = `69°`

        // H and L container w/ H and L

        const highLowContainer = primaryWeatherContainer.appendChild(document.createElement('div'));
        highLowContainer.className = 'high-low-container';
        const highTemp = highLowContainer.appendChild(document.createElement('div'));
        highTemp.textContent = `H: 80°`;
        const lowTemp = highLowContainer.appendChild(document.createElement('div'));
        lowTemp.textContent = `L: 55°`;
        
        return primaryWeatherContainer;
    }

    function createSecondaryDataContainer() {
        const secondaryDataContainer = document.createElement('div');
        secondaryDataContainer.className = 'secondary-data-container';

        // a bunch of stuff here like air quality etc...

        return secondaryDataContainer;
    }

    weatherDataContainer.append(createPrimaryDataContainer(), createSecondaryDataContainer());

    return weatherDataContainer;
};