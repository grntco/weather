export function createAQIWidget(data) {
    const widget = document.createElement('div');
    const title = widget.appendChild(document.createElement('h4'));
    title.textContent = 'Air quality index (US standard)';

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