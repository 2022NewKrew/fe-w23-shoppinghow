import { observe } from "../core/observer.js";
import { store } from "../store.js";
import { $ } from "../utils/utils.js";
import { rollingContainerTemplate, topTenListTemplate } from "../template/header/searchTemplate.js";

export class SearchRollingView {
    $rollingWrapper;
    $itemContainer;

    constructor($element) {
        this.$rollingWrapper = $element;
        
        this.initDom();
    }

    initDom() {
        this.$rollingWrapper.innerHTML = rollingContainerTemplate();
        this.$itemContainer = $('.search-top10', this.$rollingWrapper);
        this.setEvent();
        observe(() => this.render());
    }

    setEvent() {
        const TOP10_SLIDE_INTERVAL_TIME = 4000 //ms
        const TOP10_SLIDE_TRANSITION_STYLE = 'transform 0.4s ease-in-out';
        const itemHeight = 22;
        let index = 0; // closure

        setInterval(() => {
            index++;
            this.$itemContainer.style.transition = TOP10_SLIDE_TRANSITION_STYLE;
            this.$itemContainer.style.transform = `translateY(${-itemHeight * index}px)`;
        }, TOP10_SLIDE_INTERVAL_TIME);
        this.$itemContainer.addEventListener('transitionend', ()=> {
            if(index >= 10) {
                index = 0;
                this.$itemContainer.style = '';
            }
        })
    }

    render() {
        if(store.state.top10.length !== 10) {
            return;
        }
        const list = [
            ...store.state.top10,
            store.state.top10[0]
        ];
        this.$itemContainer.innerHTML = topTenListTemplate(list);
    }
}