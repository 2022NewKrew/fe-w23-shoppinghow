import { observe } from "../core/observer.js";
import { store } from "../store.js";
import { $$ } from "../utils/utils.js";
import { suggestionTemplate, topTenListTemplate } from "./template/header/searchTemplate.js";

export class SearchSuggestionView {
    $suggestionWrapper;
    $itemContainers;

    constructor($element) {
        this.$suggestionWrapper = $element;

        this.initDom();
    }

    initDom() {
        this.$suggestionWrapper.innerHTML = suggestionTemplate();
        this.$itemContainers = $$('.list_keyword', this.suggestionWrapper);
        observe(() => this.render());
    }

    render() {
        if(store.state.top10.length !== 10) {
            return;
        }
        const lists = [
            store.state.top10.slice(0,5),
            store.state.top10.slice(5,10)
        ]

        this.$itemContainers[0].innerHTML = topTenListTemplate(lists[0]);
        this.$itemContainers[1].innerHTML = topTenListTemplate(lists[1]);
    }
}