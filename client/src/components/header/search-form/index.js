import './index.scss';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { $ } from '@/utils/helper';
import { SEARCH_ICON } from '@/static/constants/image-path';
import { setItemInLocalStroage } from '@/utils/local-storage';
import store from '@/store';

const SEARCH_NAME_LENGTH_LIMIT = 5;
const INPUT_MAX_LENGTH = 15;

export default class SearchForm {
  constructor({ $parent, onSubmit }) {
    this.searchForm = document.createElement('form');
    $parent.appendChild(this.searchForm);
    this.render();

    this.onSubmit = onSubmit;
    this.searchInput = $('.search__input', this.searchForm);
    this.searchForm.addEventListener('click', this.handleClickSearchForm.bind(this));
    this.searchForm.addEventListener('submit', this.handleSubmitSearchForm.bind(this));

    fromEvent(this.searchInput, 'input')
      .pipe(
        map((e) => e.target.value),
        filter((text) => text.length > 0),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((searchTerm) => {
        const queryString = `=${searchTerm}`;
        store.load('autoCompleteWords', queryString);
      });

    fromEvent(this.searchInput, 'input')
      .pipe(map((e) => e.target.value))
      .subscribe((input) => {
        const newState = { searchInput: input, currChoicedWordIdx: 0 };
        store.setState(newState, 'searchInput');
      });
  }

  render() {
    this.searchForm.innerHTML = `
        <input type="text" class="search__input" maxlength=${INPUT_MAX_LENGTH} />
        <button class="search__icon" type='submit'><img src=${SEARCH_ICON}></button>
    `;
  }

  handleClickSearchForm(e) {
    if (e.target.className === 'search__input') this.blurInput();
  }

  handleSubmitSearchForm(e) {
    e.preventDefault();
    const result = this.searchInput.value.replace(/^\s/, '');
    if (result) {
      setItemInLocalStroage('searchName', result, SEARCH_NAME_LENGTH_LIMIT);
      this.onSubmit();
    }
  }

  focusInput() {
    this.searchInput.focus();
  }

  blurInput() {
    this.searchInput.blur();
  }

  getInputLength() {
    return this.searchInput.value.length;
  }

  setInputValue(newData) {
    this.searchInput.value = newData;
  }
}
