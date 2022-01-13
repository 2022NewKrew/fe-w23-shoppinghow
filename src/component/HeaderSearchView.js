import { store } from '../store.js';
import { searchTemplate } from './template/header/searchTemplate.js';
import { $, debounceEvent } from '../utils/utils.js';
import { SearchSuggestionView } from './SearchSuggestionView.js';
import { SearchRollingView } from './SearchRollingView.js';
import { SearchResultView } from './SearchResultView.js';


export class HeaderSearchView {
    $searchWrapper;
    $suggestion;
    $rolling;
    $searchResult;
    suggestionView;
    rollingView;
    searchResultView;
    
    constructor($element) {
        this.$searchWrapper = $element;

        this.initDom();
        this.updateData();
    }

    initDom() {
        this.$searchWrapper.innerHTML = searchTemplate();
        this.$suggestion = $('#suggestWrap', this.$searchWrapper);
        this.$rolling = $('.wrap_rolling', this.$searchWrapper);
        this.$searchResult = $('#searchResultWrap', this.$searchWrapper);
        this.setEvent();
        this.render();
    }

    setEvent() {
        const HOVER_DELAY_TIME = 300; //ms
        const $input = $('.search__input', this.$searchWrapper);
        let mouseleave = undefined; // closure

        // 검색창 활성화
        $input.addEventListener('focus', () => {
            this.$searchWrapper.classList.add('focus');
            this.$searchWrapper.classList.remove('show_rolling');
        });
        $input.addEventListener('blur', () => {
            if ($input.value === '') {
                this.$searchWrapper.classList.add('show_rolling');
            }
        });

        // 검색창 비활성화
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

        // 검색 이벤트
        const inputHandler = () => {
            const query = $input.value;
            if(query == '') {
                this.$searchWrapper.classList.remove('on_search');
                store.setState({
                    searchQuery: {text: ''},
                    searchResult: [],
                });
                return;
            }
            this.$searchWrapper.classList.add('on_search');
            fetch('../data/searchResult.json')
                .then(response => response.json())
                .then(data => data.filter(({text}) => text.search(query) !== -1)) // 서버쪽 연산 대신 하기
                .then(filteredData => store.setState({
                    searchQuery: {text: query},
                    searchResult: filteredData,
                }));
        }
        debounceEvent({
            $target: $input,
            eventType: 'keyup',
            fn: inputHandler
        });
    }

    render() {
        this.mounted();
    }

    mounted() {
        this.suggestionView = new SearchSuggestionView(this.$suggestion);
        this.rollingView = new SearchRollingView(this.$rolling);
        this.searchResultView = new SearchResultView(this.$searchResult);
    }

    updateData() {
        fetch('../data/headerData.json')
        .then(response => response.json())
        .then(data => store.setState({
            top10: data.top10
        }));
    }
}