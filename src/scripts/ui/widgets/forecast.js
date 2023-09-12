export function createForecastWidget(data) {
    const widget = document.createElement('div');
    widget.classList.add('forecast-widget')

    function createHeader() {
        const header = document.createElement('div');
        const title = header.appendChild(document.createElement('h4'));
        const hourlyBtn = header.appendChild(document.createElement('button'));
        const dailyBtn = header.appendChild(document.createElement('button'));

        header.className = 'forecast-header';

        title.textContent = 'Forecast:';
        hourlyBtn.textContent = 'Hourly';
        dailyBtn.textContent = 'Next 3 days';

        return header;
    }
    


    widget.appendChild(createHeader());

    return widget
}