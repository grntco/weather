export function createFeelsWidget(data, scale) {
    const widget = document.createElement('div');
    const title = widget.appendChild(document.createElement('h4'));
    const temp = widget.appendChild(document.createElement('div'));

    title.textContent = 'Feels like'
    temp.textContent = `${Math.round(data.current[scale === 'c' ? "feelslike_c" : "feelslike_f"])}°`;

    return widget;
}