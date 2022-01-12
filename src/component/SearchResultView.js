import { observe } from "../core/observer.js";
import { store } from "../store.js";
import { $ } from "../utils/utils.js";
import { resultListTemplate, searchResultTemplate } from "./template/header/searchTemplate.js";

export class SearchResultView {
    $resultWrapper;
    $itemContainer;

    constructor($element) {
        this.$resultWrapper = $element;

        this.initDom();
    }

    initDom() {
        this.$resultWrapper.innerHTML = searchResultTemplate();
        this.$itemContainer = $('.list_result', this.$element);
        observe(() => this.render());
    }

    render() {
        if(store.state.searchResult.length === 0) {
            return;
        }
        const list = [...store.state.searchResult];
        this.$itemContainer.innerHTML = resultListTemplate(list);
    }
}