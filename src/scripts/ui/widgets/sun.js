import format from "date-fns/format";

export function createSunWidget(data) {
    const widget = document.createElement('div');
    const firstTitle = widget.appendChild(document.createElement('h4'));
    const firstTime = widget.appendChild(document.createElement('div'));
    const secondTitle = widget.appendChild(document.createElement('h4'));
    const secondTime = widget.appendChild(document.createElement('div'));
    const setTime = truncate(data.forecast.forecastday[0].astro.sunset);
    const riseTime = truncate(data.forecast.forecastday[0].astro.sunrise);
    const isDay = data.current.is_day === 1 ? true : false;

    firstTitle.textContent = isDay ? 'Sunset' : 'Sunrise';
    firstTime.textContent = isDay ? setTime : riseTime;
    secondTitle.textContent = isDay ? 'Sunrise' : 'Sunset';
    secondTime.textContent = isDay ? riseTime : setTime;

    function truncate(time) {
        if (time[0] === '0') {
            time = time.split('').slice(1, time.length).join('');
        }
        return time;
    }

    return widget;
}