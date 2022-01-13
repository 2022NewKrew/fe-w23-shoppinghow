import { observe } from "../core/observer.js";
import { store } from "../store.js";
import { $ } from "../utils/utils.js";
import { resultListTemplate, searchResultTemplate } from "../template/header/searchTemplate.js";

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
        const list = [...store.state.searchResult];
        const query = store.state.searchQuery.text;
        if(list.length === 0 || query === '') {
            this.$itemContainer.innerHTML = `
                <strong>검색 결과 없음</strong>
            `;
            return;
        }
        this.$itemContainer.innerHTML = resultListTemplate(list, query);
    }
}