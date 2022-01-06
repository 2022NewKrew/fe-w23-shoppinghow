export class SearchInputController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.interval = "";
    }

    autoRotating(target, lineHeight, lastListPosition, trasitionDelay) {
        const startTop = parseInt(getComputedStyle(target).top.split("px")[0]);
        if (!target.classList.contains("animate")) {
            target.classList.add("animate"); 
        }
        target.style.top = `${startTop - lineHeight}px`;
        if (startTop === lastListPosition) {
            setTimeout(() => {
                target.classList.remove("animate"); 
                target.style.top = "0px";
            }, trasitionDelay)
        }
    }

    rollingRealTimeSearchRanking(target, lineHeight, lastListPosition, trasitionDelay, intervalDelay) {
        this.interval = setInterval(this.autoRotating, intervalDelay, target, lineHeight, lastListPosition, trasitionDelay);
    }

    render(model, view) {
        const realTimeSearchRankings = model.getRealTimeSearchRankings();
        const realTimeSearchRankingsDOM = view.createSearchRanking(realTimeSearchRankings);
        view.setSearchRanking(realTimeSearchRankingsDOM);
    }

    setEvent(view) {
        const inputForm = view.getDOMByClassName("input_form");
        const search = view.getDOMByClassName("search");
        const searchTop10 = view.getDOMByClassName("search-top10");
        const searchInput = view.getDOMByClassName("search__input");

        inputForm.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.rollingRealTimeSearchRanking(searchTop10, 26, -234, 499, 2500);

        search.addEventListener("click", () => {
            searchInput.focus();
            searchTop10.style.display = "none";
            clearInterval(this.interval);
        });

        searchInput.addEventListener("focusout", () => {
            searchTop10.style.display = "block";
            searchInput.value = "";
            this.rollingRealTimeSearchRanking(searchTop10, 26, -234, 499, 2500);
        });     
    }

    mount() {
        this.render(this.model, this.view);
        this.setEvent(this.view);
    }
}
