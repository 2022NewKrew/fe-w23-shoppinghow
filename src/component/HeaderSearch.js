import { observe } from '../core/observer.js';
import { store } from '../store.js';


class HeaderSearch {
    
    constructor($searchDiv) {
        this.$element = $searchDiv;

        // store 구독
        //observe(this.render().bind(this));
        observe(() => this.render());

        fetch('../data/headerData.json')
            .then(response => response.json())
            .then(data => store.setState({
                top10: data.top10
            }));
    }

    template() { return '' }

    setEvent() {
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