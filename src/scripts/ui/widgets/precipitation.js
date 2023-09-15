import umbrellaIcon from '../../../assets/icons/umbrella.svg';

export function createPrecipWidget(data) {
    const willRain = data.forecast.forecastday[0].day.daily_will_it_rain === 1 ? true : false;
    const willSnow = data.forecast.forecastday[0].day.daily_will_it_snow === 1 ? true : false;
    const chance = data.forecast.forecastday[0].day["daily_chance_of_" + (willSnow ? "snow" : "rain")];

    const widget = document.createElement('div');
    const header = widget.appendChild(document.createElement('div'));
    const report = widget.appendChild(document.createElement('div'));
    const description = widget.appendChild(document.createElement('p'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));

    widget.classList.add('widget', 'precip-widget');
    header.className = 'widget-header';
    report.className = 'precip-report';
    description.className = 'description';

    icon.src = umbrellaIcon;
    title.textContent = 'Precipitation';
    report.innerHTML = `${chance}<span>%</span>`;
    description.textContent = `It ${(willRain || willSnow) ? "will" : "won't"} ${willSnow ? "snow" : "rain"} today.`

    return widget;
}