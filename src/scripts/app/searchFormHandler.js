import getWeatherData from "./getWeatherData";

import { updateContent } from "../ui/updateContent";

export async function submitQuery() {
    const input = document.querySelector('.search-input');
    const location = input.value.toLowerCase().split(' ').join('-');
    const data = await getWeatherData(location);

    updateContent(data);
}

