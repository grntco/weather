import { moveToNextSlide, moveToPreviousSlide } from "../ui/widgets/forecast";
import { submitQuery } from "./searchFormHandler";

export const events = document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitQuery();
    });

    document.addEventListener('click', function(e) {
        if (e.target.className === 'left-arrow') {
            moveToPreviousSlide();
        }
        if (e.target.className === 'right-arrow') {
            moveToNextSlide();
        }
    });
});