import { $ } from "@utils";

export class SearchInputView {
    constructor(model) {
        this.model = model;
    }

    createSearchRanking(ranks) {
        return ranks
            .map((rank, idx) => `<li class="search-top10__item">${idx === 10 ? 1 : idx + 1}. ${rank}</li>`)
            .join("");
    }

    getDOMByClassName(className) {
        return $(`.${className}`);
    }

    setSearchRanking(childNode) {
        const parentNode = $(".search-top10");
        parentNode.innerHTML = childNode;
    }
}
