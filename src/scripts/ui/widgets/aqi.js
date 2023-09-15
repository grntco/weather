import barChartIcon from '../../../assets/icons/bar-chart-2.svg'; 

export function createAQIWidget(data) {
    const widget = document.createElement('div');
    const header = widget.appendChild(document.createElement('div'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));
    const aqi = data.forecast.forecastday[0].day.air_quality['us-epa-index'];
    const report = widget.appendChild(document.createElement('div'));
    const descriptiveText = widget.appendChild(document.createElement('p'));

    let aqiCondition = '';

    widget.className = 'aqi-widget';
    header.className = 'widget-header';
    descriptiveText.className = 'descriptive-text';


    icon.src = barChartIcon;
    title.textContent = 'Air quality index';

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

    report.className = 'aqi-report';
    report.textContent = aqi;
    descriptiveText.textContent = `The air quality is ${aqiCondition.toLowerCase()}.`;

    return widget;
}