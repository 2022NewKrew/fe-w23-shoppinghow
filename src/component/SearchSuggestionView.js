import { observe } from "../core/observer.js";
import { store } from "../store.js";
import { $$ } from "../utils/utils.js";
import { topTenItemTemplate } from "./template/header/searchTemplate.js";


const suggestionTemplate = () => `
    <div class="inner_suggestion">
        <strong class="tit_suggestion">인기 쇼핑 키워드</strong>
        <ol class="list_keyword"></ol>
        <ol class="list_keyword"></ol>
    </div>
`;

export class SearchSuggestionView {
    $element;
    $item_containers;

    constructor($element) {
        this.$element = $element;

        this.initDom();
        observe(() => this.render());
    }

    initDom() {
        this.$element.innerHTML = suggestionTemplate();
        this.$item_containers = $$('.list_keyword', $element);
    }

    render() {
        if(store.state.top10.length !== 10) {
            return;
        }
        const lists = [
            store.state.top10.slice(0,5),
            store.state.top10.slice(5,10)
        ]

        const reduceHandler = (html, item) => html + topTenItemTemplate(item);
        this.item_containers[0].innerHTML = lists[0].reduce(reduceHandler, '');
        this.item_containers[1].innerHTML = lists[1].reduce(reduceHandler, '');
    }
}