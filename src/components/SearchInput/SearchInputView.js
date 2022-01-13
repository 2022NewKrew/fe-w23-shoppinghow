import { View } from "@core";

export class SearchInputView extends View {
    createSearchRanking(ranks) {
        return ranks
            .map((rank, idx) => `<li class="search-top10__item">${idx === 10 ? 1 : idx + 1}. ${rank}</li>`)
            .join("");
    }
}
