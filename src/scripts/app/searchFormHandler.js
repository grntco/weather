import getWeatherData from "./getWeatherData";

export function submitQuery() {
    const input = document.querySelector('.search-input');
    const location = input.value.toLowerCase().split(' ').join('-');
    
    console.log(getWeatherData(location, 'current'));
}

