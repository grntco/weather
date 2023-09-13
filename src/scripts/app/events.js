import { toggleScale } from "../ui/scale";
import { moveToNextSlide, moveToPreviousSlide } from "../ui/widgets/forecast";
import { handleSearch } from "./handleSearch";

export const events = document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSearch();
    });

    document.addEventListener('click', function(e) {
        if (e.target.className === 'left-arrow') {
            moveToPreviousSlide();
        }
        if (e.target.className === 'right-arrow') {
            moveToNextSlide();
        }
        if (e.target.className === 'scale-toggle-btn') {
            toggleScale();
        }
    });
});