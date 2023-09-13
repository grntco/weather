import barChartIcon from '../../../assets/icons/bar-chart-2.svg'; 

export function createAQIWidget(data) {
    const widget = document.createElement('div');
    const header = widget.appendChild(document.createElement('div'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));
    const aqi = data.forecast.forecastday[0].day.air_quality['us-epa-index'];
    let aqiCondition = '';

    header.className = 'widget-header';

    icon.src = barChartIcon;
    title.textContent = 'Air quality index (US standard)';

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