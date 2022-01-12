import './index.scss';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { $ } from '@/utils/helper';
import { SEARCH_ICON } from '@/static/constants/image-path';
import { setItemInLocalStroage } from '@/utils/local-storage';
import { api } from '@/api';

const SEARCH_NAME_LENGTH_LIMIT = 5;
const INPUT_MAX_LENGTH = 15;

export default class SearchForm {
  constructor({ $parent, onSubmit, refreshAutoCompleteWord, refreshInputValue }) {
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
        distinctUntilChanged(),
        switchMap((searchTerm) => api.get(`/item/autocomplete?search=${searchTerm}`)),
        map((res) => res.result)
      )
      .subscribe((searchTerm) => {
        const titles = searchTerm.map((term) => term.title);
        refreshAutoCompleteWord(titles);
      });

    fromEvent(this.searchInput, 'input')
      .pipe(map((e) => e.target.value))
      .subscribe((input) => refreshInputValue(input));
  }

  render() {
    this.searchForm.innerHTML = `
        <input type="text" class="search__input" maxlength=${INPUT_MAX_LENGTH} />
        <button class="search__icon"><img src=${SEARCH_ICON}></button>
    `;
  }

  handleClickSearchForm(e) {
    if (e.target.className === 'search__input') this.blurInput();
  }

  handleSubmitSearchForm(e) {
    e.preventDefault();
    const result = this.searchInput.value.replace(/^\s/, '');
    if (result) {
      setItemInLocalStroage('search-name', result, SEARCH_NAME_LENGTH_LIMIT);
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
