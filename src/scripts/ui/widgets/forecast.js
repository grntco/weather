import format from "date-fns/format";

export function createForecastWidget(data, scale) {
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
        dailyBtn.textContent = 'Daily';

        return header;
    }
    
    function createHourlyContainer() {
        const container = document.createElement('div');
        container.className = 'hourly-container';

        return container;
    }
    
    function createDailyContainer() {
        const container = document.createElement('div');
        container.className = 'daily-container';

        for (let i = 1; i < 4; i++) {
            const gridItem = container.appendChild(document.createElement('div'));
            const day = gridItem.appendChild(document.createElement('div'));
            // const icon = gridItem.appendChild(document.createElement('img'));
            const highLow = gridItem.appendChild(document.createElement('div'));
            const dayData = data.forecast.forecastday[i];
            const hTemp = Math.round(dayData.day[scale === 'c' ? "maxtemp_c" : "maxtemp_f"]);
            const lTemp = Math.round(dayData.day[scale === 'c' ? "mintemp_c" : "mintemp_f"]);
    

            day.textContent = format(new Date(dayData.date), 'iii');
            highLow.textContent = `H: ${hTemp}° L: ${lTemp}°`;
        }

        return container;
    }


    widget.append(
        createHeader(),
        createDailyContainer()
    );

    return widget;
}