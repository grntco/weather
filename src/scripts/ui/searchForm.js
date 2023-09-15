export function createSearchForm() {
    const form = document.createElement('form');
    const input = form.appendChild(document.createElement('input'));
    const button = form.appendChild(document.createElement('button'));

    form.className = 'search-form';
    input.className = 'search-input';

    input.placeholder = 'Enter city...';
    button.type = 'submit';
    button.textContent = 'Search';

    return form;
}