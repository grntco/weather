export function createPrecipWidget(data) {
    const widget = document.createElement('div');
    const title = widget.appendChild(document.createElement('h4'));
    const willRain = data.forecast.forecastday[0].day.daily_will_it_rain === 1 ? true : false;
    const willSnow = data.forecast.forecastday[0].day.daily_will_it_snow === 1 ? true : false;
    const chance = data.forecast.forecastday[0].day["daily_chance_of_" + (willSnow ? "snow" : "rain")];
    const percentageText = widget.appendChild(document.createElement('div'));
    const descriptionText = widget.appendChild(document.createElement('p'));

    title.textContent = 'Precipitation';
    percentageText.innerHTML = `${chance}<span>%</span>`;
    descriptionText.textContent = `It ${(willRain || willSnow) ? "will" : "won't"} ${willSnow ? "snow" : "rain"} today.`

    return widget;
}