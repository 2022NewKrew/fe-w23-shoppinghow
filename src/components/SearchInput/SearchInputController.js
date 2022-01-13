import { Controller } from "@core";
import { rotateComponent } from "@utils";

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

    rollingRealTimeSearchRanking({ target, moveDegree, initialPosition, moveDirection, lastListPosition, trasitionDelay, intervalDelay }) {
        this.interval = setInterval(rotateComponent, intervalDelay, target, moveDegree, initialPosition, moveDirection, lastListPosition, trasitionDelay);
    }

    setEvent() {
        const inputForm = this.view.getDOMByClassName("input_form");
        const search = this.view.getDOMByClassName("search");
        const searchTop10 = this.view.getDOMByClassName("search-top10");
        const searchInput = this.view.getDOMByClassName("search__input");
        const rollingInputDatas = {
            target: searchTop10,
            moveDegree: 26,
            initialPosition: 0,
            moveDirection: "top",
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
