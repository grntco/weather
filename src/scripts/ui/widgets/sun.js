import sunriseIcon from '../../../assets/icons/sunrise.svg'
import sunsetIcon from '../../../assets/icons/sunset.svg'

export function createSunWidget(data) {
    const widget = document.createElement('div');
    const isDay = data.current.is_day === 1 ? true : false;
    const setTime = truncate(data.forecast.forecastday[0].astro.sunset);
    const riseTime = truncate(data.forecast.forecastday[0].astro.sunrise);

    const header = widget.appendChild(document.createElement('div'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));
    const time = widget.appendChild(document.createElement('div'));
    const descriptiveText = widget.appendChild(document.createElement('p'));
    
    widget.className = 'sun-widget';
    header.className = 'widget-header';
    time.className = 'sun-main-time';
    descriptiveText.className = 'descriptive-text';

    icon.src = isDay ? sunsetIcon : sunriseIcon;
    title.textContent = isDay ? 'Sunset' : 'Sunrise';
    time.innerHTML = `${(isDay ? setTime : riseTime).split(' ')[0]}<span>${(isDay ? setTime : riseTime).split(' ')[1]}</span>`;
    descriptiveText.innerHTML = `${isDay ? 'Sunrise' : 'Sunset'}: ${isDay ? riseTime : setTime}`;

    function truncate(time) {
        if (time[0] === '0') {
            time = time.split('').slice(1, time.length).join('');
        }
        return time;
    }

    return widget;
}