import './index.scss';
import { $ } from '@/utils/helper';
import { SEARCH_ICON } from '@/static/constants/image-path';
import { setItemInLocalStroage } from '../../../utils/local-storage';

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
    const result = this.searchInput.value.replace(/\s/g, '');
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
