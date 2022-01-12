import { store } from '../store.js';
import { searchTemplate } from './template/header/searchTemplate.js';
import { $ } from '../utils/utils.js';
import { SearchSuggestionView } from './SearchSuggestionView.js';
import { SearchRollingView } from './SearchRollingView.js';


export class HeaderSearch {
    $searchWrapper;
    $suggestion;
    $rolling;
    suggestionView;
    rollingView;
    
    constructor($element) {
        this.$searchWrapper = $element;

        this.initDom();
        this.updateData();
    }

    initDom() {
        this.$searchWrapper.innerHTML = searchTemplate();
        this.$suggestion = $('#suggestWrap', this.$searchWrapper);
        this.$rolling = $('.wrap_rolling', this.$searchWrapper);
        this.setEvent();
        this.render();
    }

    setEvent() {
        const HOVER_DELAY_TIME = 300; //ms
        const $input = $('.search__input', this.$searchWrapper);
        let mouseleave = undefined; // closure

        $input.addEventListener('focus', () => {
            this.$searchWrapper.classList.add('focus');
            this.$searchWrapper.classList.remove('show_rolling');
        });
        $input.addEventListener('blur', () => {
            if ($input.value === '') {
                this.$searchWrapper.classList.add('show_rolling');
            }
        });

        this.$searchWrapper.addEventListener('mouseenter', ()=> {
            if(mouseleave !== undefined) {
                clearTimeout(mouseleave);
                mouseleave = undefined;
            }
        });
        this.$searchWrapper.addEventListener('mouseleave', () => {
            mouseleave = setTimeout(()=> {
                $input.blur();
                this.$searchWrapper.classList.remove('focus');
            }, HOVER_DELAY_TIME);
        });
    }

    render() {
        this.mounted();
    }

    mounted() {
        this.suggestionView = new SearchSuggestionView(this.$suggestion);
        this.rollingView = new SearchRollingView(this.$rolling);
    }

    updateData() {
        fetch('../data/headerData.json')
        .then(response => response.json())
        .then(data => store.setState({
            top10: data.top10
        }));
    }
}