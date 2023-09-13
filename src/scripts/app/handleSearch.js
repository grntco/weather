import getWeatherData from "./getWeatherData";
import { updateContent } from "../ui/updateContent";
import { displaySearchError, removeSearchError } from "../ui/searchError";

export async function handleSearch() {
    try {
        const input = document.querySelector('.search-input');
        const location = input.value.toLowerCase().split(' ').join('-');
        const data = await getWeatherData(location);
        if (data) updateContent(data);
        if (document.querySelector('.search-error')) removeSearchError();
    } catch (error) {
        displaySearchError();
        console.log(error);
    }
}

