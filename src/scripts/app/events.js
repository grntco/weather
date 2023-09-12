import { submitQuery } from "./searchFormHandler";

export const events = document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitQuery();
    });
});