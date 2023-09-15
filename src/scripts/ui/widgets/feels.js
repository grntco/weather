import thermometerIcon from '../../../assets/icons/thermometer.svg';

export function createFeelsWidget(data, scale) {
    const temp = Math.round(data.current[scale === 'c' ? "feelslike_c" : "feelslike_f"]);

    const widget = document.createElement('div');
    const header = widget.appendChild(document.createElement('div'));
    const report = widget.appendChild(document.createElement('div'));
    const icon = header.appendChild(document.createElement('img'));
    const title = header.appendChild(document.createElement('h4'));

    widget.className = 'feels-widget';
    header.className = 'widget-header';
    report.className = 'feels-report'

    icon.src = thermometerIcon;
    title.textContent = 'Feels like';
    report.innerHTML = `${temp}<span>°</span/`;

    return widget;
}