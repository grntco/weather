import { createSearchForm }  from "./searchForm";

export default function createMainView() {
    const mainView = document.body.appendChild(document.createElement('div'));
    mainView.className = 'main-view';

    mainView.appendChild(createSearchForm());
};