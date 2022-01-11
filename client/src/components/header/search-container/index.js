import TextRoller from '@/components/common/text-roller';
import HelpSearchContainer from '../help-search-container';
import SearchForm from '../search-form';
import './index.scss';
import { getItemInLocalStroage, removeItemInLocalStroage } from '@/utils/local-storage';
import { api } from '@/api';

const cssNameForActivation = 'active';
const classNameForSetInputValue = [
  'recent-search-name__item-name',
  'hot-shopping-keyword__item-name',
  'autocomplete__item',
];

export default class SearchContainer {
  state = {
    searchName: getItemInLocalStroage('search-name'),
    autoCompleteWords: [],
    searchInput: '',
  };

  constructor({ $parent }) {
    this.search = document.createElement('div');
    this.search.className = 'search';
    this.textRoller = new TextRoller({ $parent: this.search, onClick: this.activateInput.bind(this) });
    this.searchForm = new SearchForm({
      $parent: this.search,
      onSubmit: this.refreshSearchNameState.bind(this),
      refreshAutoCompleteWord: this.refreshAutoCompleteWord.bind(this),
      refreshInputValue: this.refreshInputValue.bind(this),
    });
    this.helpSearchContainer = new HelpSearchContainer({ $parent: this.search });

    $parent.appendChild(this.search);

    this.search.addEventListener('mouseleave', this.deactivateInput.bind(this));
    this.search.addEventListener('click', this.handleClickHelpSearch.bind(this));
  }

  refreshAutoCompleteWord(newWords) {
    this.setState({ autoCompleteWords: newWords });
  }

  refreshInputValue(newValue) {
    this.setState({ searchInput: newValue });
  }

  refreshSearchNameState() {
    this.state = { ...this.state, searchName: getItemInLocalStroage('search-name') };
    this.setState(this.state);
    this.searchForm.setInputValue('');
  }

  handleClickHelpSearch(e) {
    if (e.target.className === 'recent-search-name__remove') {
      removeItemInLocalStroage('search-name', e.target.dataset.idx);
      this.refreshSearchNameState();
    } else if (classNameForSetInputValue.includes(e.target.className)) {
      const input = e.target.innerText;
      this.searchForm.setInputValue(input);
      this.setState({ searchInput: input });

      api
        .get(`/item/autocomplete?search=${input}`)
        .then((res) => res.result)
        .then((result) => result.map((ele) => ele.title))
        .then((newWords) => this.setState({ autoCompleteWords: newWords }));
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

  setState(props) {
    this.state = { ...this.state, ...props };
    this.textRoller.setState(this.state);
    this.helpSearchContainer.setState(this.state);
  }
}
