import getWeatherData from "./getWeatherData";
import { updateContent } from "../ui/updateContent";
import { displaySearchError, removeSearchError } from "../ui/searchError";
import { getCurrentScale } from "../ui/scale";

export async function handleSearch() {
    try {
        const input = document.querySelector('.search-input');
        const location = input.value.toLowerCase().split(' ').join('-');
        const data = await getWeatherData(location);
        if (data) updateContent(data, getCurrentScale());
        if (document.querySelector('.search-error')) removeSearchError();
    } catch (error) {
        displaySearchError();
        console.log(error);
    }
}

