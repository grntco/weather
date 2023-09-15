import format from "date-fns/format";

export function createLocationWidget(data, scale) {
    const widget = document.createElement('div');

    widget.classList.add('widget', 'location-widget');

    widget.append(
        createLocationText(),
        createCurrentTempText(),
        createHighLowText(),
        createConditionText()
    );

    function createLocationText() {
        const region = data.location.country !== "United States of America" ? data.location.country : data.location.region;
        const text = document.createElement('h3');

        text.className = 'location';
        text.textContent = `${data.location.name}, ${region}`;

        return text;
    };

    function createCurrentTempText() {
        const temp = Math.round(data.current[scale === 'c' ? "temp_c" : "temp_f"]);
        const text = document.createElement('div');

        text.className = 'current-temp';
        text.innerHTML = `${temp} <span>°${scale === 'c' ? 'C' : 'F'}</span>`;

        return text;
    };

    function createHighLowText() {
        const text = document.createElement('div');
        const hTemp = Math.round(data.forecast.forecastday[0].day[scale === 'c' ? "maxtemp_c" : "maxtemp_f"]);
        const lTemp = Math.round(data.forecast.forecastday[0].day[scale === 'c' ? "mintemp_c" : "mintemp_f"]);

        text.textContent = `H: ${hTemp}° L: ${lTemp}°`;

        return text;
    };

    function createConditionText() {
        const time = format(new Date(data.location.localtime), 'p').toLowerCase();
        const condition = data.current.condition.text.toLowerCase();
        const code = data.current.condition.code;
        const date = format(new Date(data.location.localtime), 'EEEE, MMMM d');
        const text = document.createElement('p');

        text.className = 'condition';
        text.textContent = `It's currently ${time} ${code < 1010 ? 'and' : 'with'} ${condition} on ${date}.`;

        return text;
    };
    
    return widget;
}