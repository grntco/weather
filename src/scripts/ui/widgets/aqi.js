import barChartIcon from '../../../assets/icons/bar-chart-2.svg'; 

export function createAQIWidget(data) {
    const aqi = data.forecast.forecastday[0].day.air_quality['us-epa-index'];

    const widget = document.createElement('div');
    const header = widget.appendChild(document.createElement('div'));
    const report = widget.appendChild(document.createElement('div'));
    const description = widget.appendChild(document.createElement('p'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));

    widget.className = 'aqi-widget';
    header.className = 'widget-header';
    report.className = 'aqi-report';
    description.className = 'description';
    
    icon.src = barChartIcon;
    title.textContent = 'Air quality index';
    report.textContent = aqi;
    description.textContent = `The air quality is ${getAQICondition(aqi).toLowerCase()}.`;

    function getAQICondition(aqi) {
        switch (aqi) {
            case 1:
                return 'Good';
            case 2:
                return 'Moderate';
            case 3:
                return 'Unhealthy for sensitive groups';
            case 4:
                return 'Unhealthy';
            case 5:
                return 'Very Unhealthy';
            case 6: 
                return 'Hazardous';
            default:
                return 'Unable to retrieve data';
        }
    }

    return widget;
}