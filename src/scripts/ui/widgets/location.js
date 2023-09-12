import format from "date-fns/format";

export function createLocationWidget(data, scale) {
    const widget = document.createElement('div');
    widget.classList.add('widget', 'location-widget');

    function createConditionText() {
        const text = document.createElement('p');
        const time = format(new Date(data.location.localtime), 'p').toLowerCase();
        const condition = data.current.condition.text.toLowerCase();
        const date = format(new Date(data.location.localtime), 'EEEE, MMMM d');

        text.className = 'condition';
        text.textContent = `It's currently ${time} and ${condition} on ${date}.`;

        return text;
    };

    function createLocationText() {
        const text = document.createElement('h3');
        const region = data.location.country !== "United States of America" ? data.location.country : data.location.region;

        text.className = 'location';
        text.textContent = `${data.location.name}, ${region}`;

        return text;
    };

    function createCurrentTempText() {
        const text = document.createElement('div');

        text.className = 'current-temp';
        text.textContent = `${Math.round(data.current[scale === 'c' ? "temp_c" : "temp_f"])}`;

        return text;
    };

    function createHighLowText() {
        const text = document.createElement('div');
        const hTemp = Math.round(data.forecast.forecastday[0].day[scale === 'c' ? "maxtemp_c" : "maxtemp_f"]);
        const lTemp = Math.round(data.forecast.forecastday[0].day[scale === 'c' ? "mintemp_c" : "mintemp_f"]);

        text.textContent = `H: ${hTemp}° L: ${lTemp}°`;

        return text;
    };

    widget.append(
        createConditionText(),
        createLocationText(),
        createCurrentTempText(),
        createHighLowText()
    );
    
    return widget;
}