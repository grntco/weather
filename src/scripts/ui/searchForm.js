export function createSearchForm() {
    const form = document.createElement('form');
    form.className = 'search-form';

    const input = document.createElement('input');
    input.className = 'search-input';
    input.placeholder = 'Enter city...';
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Search';

    form.append(input, button);

    return form;
}