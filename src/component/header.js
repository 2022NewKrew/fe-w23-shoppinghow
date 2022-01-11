import { headerTemplate } from "./template/header/headerTemplate.js";
import { addHoverEvent } from "./event/hoverEvent.js";
import { $ } from "../utils/utils.js";
import { HeaderSearch } from "./HeaderSearch.js";
import { store } from "../store.js";
import { observe } from "../core/observer.js";

export class Header {
    constructor($header) {
        this.$element = $header;
        
        observe(() => this.render());

        fetch('../data/headerData.json')
            .then(response => response.json())
            .then(data => store.setState({
                menu: data.menu
            }));
    }

    template() {
        const headerTpl = headerTemplate(store.state.menu);
        return headerTpl;
    }

    setEvent() {
        addHoverEvent({element: $('.recent-product', this.$element)});
        addHoverEvent({element: $('.category', this.$element)});
    }

    render() {
        this.$element.innerHTML = this.template();
        this.setEvent();
        this.mounted();
    }

    mounted() {
        this.searchComponent = new HeaderSearch($('.search', this.$element));
    }
}