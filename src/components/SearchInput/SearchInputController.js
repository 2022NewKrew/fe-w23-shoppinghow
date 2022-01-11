import { Controller } from "@core";

export class SearchInputController extends Controller {
    constructor(model, view) {
        super(model, view);
        this.interval = "";
    }
    
    init() {
        const realTimeSearchRankings = this.model.getRealTimeSearchRankings();
        const realTimeSearchRankingsDOM = this.view.createSearchRanking(realTimeSearchRankings);
        this.view.mount({
            parentClassName: "search-top10", 
            childNode: realTimeSearchRankingsDOM
        });
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

    rollingRealTimeSearchRanking({ target, lineHeight, lastListPosition, trasitionDelay, intervalDelay }) {
        this.interval = setInterval(this.autoRotating, intervalDelay, target, lineHeight, lastListPosition, trasitionDelay);
    }


    setEvent() {
        const inputForm = this.view.getDOMByClassName("input_form");
        const search = this.view.getDOMByClassName("search");
        const searchTop10 = this.view.getDOMByClassName("search-top10");
        const searchInput = this.view.getDOMByClassName("search__input");
        const rollingInputDatas = {
            target: searchTop10,
            lineHeight: 26,
            lastListPosition: -234,
            trasitionDelay: 499,
            intervalDelay: 2500
        };

        inputForm.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.rollingRealTimeSearchRanking(rollingInputDatas);

        search.addEventListener("click", () => {
            searchInput.focus();
            searchTop10.style.display = "none";
            clearInterval(this.interval);
        });

        searchInput.addEventListener("focusout", () => {
            searchTop10.style.display = "block";
            searchInput.value = "";
            this.rollingRealTimeSearchRanking(rollingInputDatas);
        });     
    }
}
