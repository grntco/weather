import thermometerIcon from '../../../assets/icons/thermometer.svg';

export function createFeelsWidget(data, scale) {
    const widget = document.createElement('div');
    const header = widget.appendChild(document.createElement('div'));
    const temp = widget.appendChild(document.createElement('div'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));

    widget.className = 'feels-widget';
    header.className = 'widget-header';
    temp.className = 'feels-temp'

    icon.src = thermometerIcon;
    title.textContent = 'Feels like';
    temp.innerHTML = `${Math.round(data.current[scale === 'c' ? "feelslike_c" : "feelslike_f"])}<span>°</span/`;

    return widget;
}