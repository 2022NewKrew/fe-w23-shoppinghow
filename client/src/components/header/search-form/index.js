import { SEARCH_ICON } from '@/static/constants/image-path';
import { $ } from '@/utils/helper';
import './index.scss';

export default class SearchForm {
  constructor({ $parent }) {
    this.searchForm = document.createElement('form');
    $parent.appendChild(this.searchForm);
    this.render();

    this.searchForm.addEventListener('click', this.handleClickSearchForm.bind(this));
  }

  render() {
    this.searchForm.innerHTML = `
        <input type="text" class="search__input" />
        <button class="search__icon"><img src=${SEARCH_ICON}></button>
    `;
  }

  handleClickSearchForm(e) {
    if (e.target.className === 'search__input') this.blurInput();
  }

  focusInput() {
    $('.search__input', this.searchForm).focus();
  }

  blurInput() {
    $('.search__input', this.searchForm).blur();
  }

  getInputLength() {
    return $('.search__input', this.searchForm).value.length;
  }
}
