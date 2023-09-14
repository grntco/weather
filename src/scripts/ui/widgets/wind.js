import windIcon from '../../../assets/icons/wind.svg';

export function createWindWidget(data, scale) {
    const widget = document.createElement('div');
    const header = widget.appendChild(document.createElement('div'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));
    const speed = Math.round(data.current[scale === 'c' ? "wind_kph" : "wind_mph"]);
    const unit = scale === 'c' ? 'kph' : 'mph'
    const report = widget.appendChild(document.createElement('div'));
    
    widget.className = 'wind-widget';
    header.className = 'widget-header';
    report.className = 'wind-speed';

    icon.src = windIcon;
    title.textContent = 'Wind speed';
    report.innerHTML = `${speed}<span>${unit}</span>`;

    return widget;
}