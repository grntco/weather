import format from "date-fns/format";

export function createWeatherDataContainer(data) {
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

        // a bunch of stuff here like air quality etc...

        // for (let i = 0; i < 6; i++) {
        //     secondaryDataContainer.appendChild(document.createElement('div'));
        // }

        function createFeelsLikeWidget() {
            const widget = secondaryDataContainer.appendChild(document.createElement('div'));
            const title = widget.appendChild(document.createElement('h4'));
            title.textContent = 'Feels like'
            const temp = widget.appendChild(document.createElement('div'));
            temp.textContent = data.current.feelslike_f;

            return widget;
        }

        function createAirQualityWidget() {
            const widget = secondaryDataContainer.appendChild(document.createElement('div'));
            const title = widget.appendChild(document.createElement('h4'));
            title.textContent = 'Air quality index';
       
            const aqi = data.forecast.forecastday[0].day.air_quality['us-epa-index'];
            let aqiCondition = '';

            switch (aqi) {
                case 1:
                    aqiCondition = 'Good';
                    break;
                case 2:
                    aqiCondition = 'Moderate';
                    break;
                case 3:
                    aqiCondition = 'Unhealthy for sensitive groups';
                    break;
                case 4:
                    aqiCondition = 'Unhealthy';
                    break;
                case 5:
                    aqiCondition = 'Very Unhealthy';
                    break;
                case 6: 
                    aqiCondition = 'Hazardous';
                    break;
                default:
                    aqiCondition = 'Unable to retrieve data';
            }

            const aqiReport = widget.appendChild(document.createElement('div'));
            aqiReport.textContent = `${aqi} – ${aqiCondition}`;


            return widget;
        }

        function createWindWidget() {
            const widget = secondaryDataContainer.appendChild(document.createElement('div'));
            const title = widget.appendChild(document.createElement('h4'));
            title.textContent = 'Wind speed';

            const speed = data.current.wind_mph;
            const report = widget.appendChild(document.createElement('div'));
            report.textContent = `${speed} mph`




            return widget;
        }

        secondaryDataContainer.append(createWindWidget(), createAirQualityWidget(), createFeelsLikeWidget())

        return secondaryDataContainer;
    }

    weatherDataContainer.append(createPrimaryDataContainer(data), createSecondaryDataContainer(data));

    return weatherDataContainer;
    const mainView = document.querySelector('.main-view');
    mainView.appendChild(weatherDataContainer);
};

// Maybe separate out initial display of elements, or structuring of elements, and a function that just updates their values (i.e., refreshContent)