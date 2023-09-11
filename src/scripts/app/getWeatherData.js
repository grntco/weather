export default async function getWeatherData(location, apiType) {
    const baseUrl = 'http://api.weatherapi.com/v1';
    const apiKey = '6b4786fb686f4663bb6125107230809';

    try {
        const apiMethod = `/${apiType}.json`;
        const response = await fetch(`${baseUrl}${apiMethod}?key=${apiKey}&q=${location}`, {mode:"cors"});
        const data = await response.json();
        console.log( data );
        return data; 
    } catch (error) {
        console.log(error);
    }
}