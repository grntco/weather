export function createSearchError() {
    const searchError = document.createElement('p');
    searchError.className = 'search-error';

    return searchError;
}

export function displaySearchError() {
    const searchError = document.querySelector('.search-error');
    searchError.textContent = 'Invalid search. Enter a city name.'
    searchError.classList.add('visible');
}

export function removeSearchError() {
    const searchError = document.querySelector('.search-error');
    searchError.classList.remove('visible');

}