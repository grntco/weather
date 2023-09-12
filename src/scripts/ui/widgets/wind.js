export function createWindWidget(data, scale) {
    const widget = document.createElement('div');
    const title = widget.appendChild(document.createElement('h4'));
    title.textContent = 'Wind speed';

    const speed = data.current[scale === 'c' ? "wind_kph" : "wind_mph"];
    const unit = scale === 'c' ? 'kph' : 'mph'
    const report = widget.appendChild(document.createElement('div'));
    report.textContent = `${speed} ${unit}`;

    return widget;
}