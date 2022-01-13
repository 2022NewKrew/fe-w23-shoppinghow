import { $ } from "../utils/utils.js";

import { store } from "../store.js";
import { observe } from "../core/observer.js";

import { menuTemplate } from "./template/header/menuTemplate.js";
import { headerTemplate } from "./template/header/headerTemplate.js";

import { addHoverEvent } from "./event/hoverEvent.js";

import { HeaderSearchView } from "./HeaderSearchView.js";


export class HeaderView {
    $header;
    $searchWrapper;
    $menuWrapper;
    searchView;

    constructor($header) {
        this.$header = $header;
        
        this.initDom();
        this.fetchData();
    }

    initDom() {
        this.$header.innerHTML = headerTemplate();
        this.$searchWrapper = $('.search', this.$header);
        this.$menuWrapper = $('.header-menu', this.$header);
        this.searchView = new HeaderSearchView(this.$searchWrapper);
        observe(() => this.render());
    }

    setEvent() {
        addHoverEvent({element: $('.recent-product', this.$menuWrapper)});
        addHoverEvent({element: $('.category', this.$menuWrapper)});
    }

    render() {
        this.$menuWrapper.innerHTML = menuTemplate({
            topMenuList: store.state.topMenuList,
            keywordList: store.state.keywordList
        });
        this.setEvent();
    }

    fetchData() {
        fetch('../data/headerData.json')
            .then(response => response.json())
            .then(data => store.setState({
                topMenuList: data.menu.topMenuList,
                keywordList: data.menu.keywordList
            }));
    }
}