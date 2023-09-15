import sunriseIcon from '../../../assets/icons/sunrise.svg'
import sunsetIcon from '../../../assets/icons/sunset.svg'

export function createSunWidget(data) {
    const isDay = data.current.is_day === 1 ? true : false;
    const setTime = truncate(data.forecast.forecastday[0].astro.sunset);
    const riseTime = truncate(data.forecast.forecastday[0].astro.sunrise);

    const widget = document.createElement('div');
    const header = widget.appendChild(document.createElement('div'));
    const report = widget.appendChild(document.createElement('div'));
    const description = widget.appendChild(document.createElement('p'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));
    
    widget.classList.add('widget', 'sun-widget');
    header.className = 'widget-header';
    report.className = 'sun-report';
    description.className = 'description';

    icon.src = isDay ? sunsetIcon : sunriseIcon;
    title.textContent = isDay ? 'Sunset' : 'Sunrise';
    report.innerHTML = `${(isDay ? setTime : riseTime).split(' ')[0]}<span>${(isDay ? setTime : riseTime).split(' ')[1]}</span>`;
    description.innerHTML = `${isDay ? 'Sunrise' : 'Sunset'}: ${isDay ? riseTime : setTime}`;

    function truncate(time) {
        if (time[0] === '0') {
            time = time.split('').slice(1, time.length).join('');
        }
        return time;
    }

    return widget;
}