import { headerTemplate } from "./template/header/headerTemplate.js";
import { addHoverEvent } from "./event/hoverEvent.js";
import { top10Event } from "./event/top10Event.js";
import { $ } from "../utils/utils.js";

export class Header {
    state = {
        top10: [],
        menu: {
            topMenuList: [],
            keywordList: [],
        }
    };

    constructor($header) {
        this.$element = $header;

        fetch('../data/headerData.json')
            .then(response => response.json())
            .then(data => this.setState({
                top10: data.top10,
                menu: data.menu
            }));
        
        this.render();
    }

    setState(newState) {
        this.state = {...this.state, ...newState};
        this.render();
    }

    template() {
        const headerTpl = headerTemplate(this.state.top10, this.state.menu);
        return headerTpl;
    }

    setEvent() {
        addHoverEvent({element: $('.recent-product', this.$element)});
        addHoverEvent({element: $('.category', this.$element)});
        top10Event({
            inputBoxEl: $('.search', this.$element),
            inputEl: $('.search input', this.$element),
            containerEl: $('.search-top10', this.$element)
        });
    }

    render() {
        this.$element.innerHTML = this.template();
        this.setEvent();
    }
}