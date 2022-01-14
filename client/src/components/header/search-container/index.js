import TextRoller from '@/components/common/text-roller';
import HelpSearchContainer from '../help-search-container';
import SearchForm from '../search-form';
import './index.scss';
import { getItemInLocalStroage, removeItemInLocalStroage } from '@/utils/local-storage';
import evt from '@/utils/custom-event';
import store from '@/store';

const subscribeList = ['hotItemsName', 'searchName', 'autoCompleteWords', 'searchInput', 'currChoicedWordIdx'];
const initLoadList = ['hotItemsName', 'searchName'];
const cssNameForActivation = 'active';
const classNameForSetInputValue = [
  'recent-search-name__item-name',
  'hot-shopping-keyword__item-name',
  'autocomplete__item',
];

export default class SearchContainer {
  constructor({ $parent }) {
    this.search = document.createElement('div');
    this.search.className = 'search';
    this.textRoller = new TextRoller({ $parent: this.search, onClick: this.activateInput.bind(this) });
    this.searchForm = new SearchForm({
      $parent: this.search,
      onSubmit: this.refreshSearchNameState.bind(this),
    });
    this.helpSearchContainer = new HelpSearchContainer({
      $parent: this.search,
    });

    $parent.appendChild(this.search);

    this.search.addEventListener('mouseleave', this.deactivateInput.bind(this));
    this.search.addEventListener('click', this.handleClickHelpSearch.bind(this));
    this.search.addEventListener('keyup', this.handleKeyUpInput.bind(this));

    this.initializeState();
  }

  initializeState() {
    subscribeList.forEach((state) => {
      evt.subscribe(state, this.handleSubscription.bind(this));
    });
    initLoadList.forEach((state) => {
      store.load(state);
    });
  }

  handleSubscription() {
    this.setState();
  }

  setState() {
    this.textRoller.setState(store.state);
    this.helpSearchContainer.setState(store.state);
  }

  refreshSearchNameState() {
    store.setState({ searchName: getItemInLocalStroage('searchName'), currChoicedWordIdx: 0 }, 'searchName');
    this.searchForm.setInputValue('');
    this.searchForm.blurInput();
    this.deactivateInput();
  }

  handleClickHelpSearch(e) {
    if (e.target.className === 'recent-search-name__remove') {
      removeItemInLocalStroage('searchName', e.target.dataset.idx);
      this.refreshSearchNameState();
    }
    if (classNameForSetInputValue.includes(e.target.className)) {
      const input = e.target.innerText;
      const queryString = `=${input}`;

      this.searchForm.setInputValue(input);
      this.searchForm.focusInput();

      store.setState({ searchInput: input }, 'searchInput');

      if (e.target.className !== 'autocomplete__item') {
        store.load('autoCompleteWords', queryString);
      }
    }
  }

  activateInput() {
    const inputLength = this.searchForm.getInputLength();
    this.search.classList.add(cssNameForActivation);
    this.searchForm.focusInput();
    this.textRoller.deActivateRoller();
    this.helpSearchContainer.activate(inputLength);
  }

  deactivateInput() {
    if (!this.searchForm.getInputLength()) {
      this.searchForm.blurInput();
      this.textRoller.deActivateRoller();
      this.textRoller.activateRoller();
    }
    this.search.classList.contains(cssNameForActivation) && this.search.classList.remove(cssNameForActivation);
    this.helpSearchContainer.deActivate();
  }

  handleKeyUpInput(e) {
    if (!store.state.searchInput || store.state.autoCompleteWords.length === 0) return;
    if (e.code === 'Enter') return;
    if (e.code !== 'ArrowUp' && e.code !== 'ArrowDown') return;
    const autoCompleteLastIdx = store.state.autoCompleteWords.length - 1;
    let newCurrChoiceIdx = 0;
    let newInputValue = '';

    if (e.code === 'ArrowUp') {
      newCurrChoiceIdx =
        store.state.currChoicedWordIdx - 1 < 0 ? autoCompleteLastIdx : store.state.currChoicedWordIdx - 1;
    }
    if (e.code === 'ArrowDown') {
      newCurrChoiceIdx =
        store.state.currChoicedWordIdx + 1 > autoCompleteLastIdx ? 0 : store.state.currChoicedWordIdx + 1;
    }

    newInputValue = store.state.autoCompleteWords[newCurrChoiceIdx];
    this.searchForm.setInputValue(newInputValue);
    store.setState({ currChoicedWordIdx: newCurrChoiceIdx }, 'currChoicedWordIdx');
  }
}
