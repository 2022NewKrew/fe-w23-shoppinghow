import { Component } from '@core';
import { RecentlySearchStore, SearchInputStore } from '@stores';
import { $, debounce, prevent } from '@utils';

export class SearchInput extends Component {
  template() {
    return /*html*/ `
        <form>
            <input type="text" class="search__input" />
            <button type="submit" class="search__icon">🔍</button>
        </form>
    `;
  }
  rendered() {
    this.$input = $('.search__input', this.$target);
    this.$input.value = SearchInputStore.getState().inputValue;

    this.$target.addEventListener('submit', prevent(this.onSearch.bind(this)));
    this.$input.onkeyup = this.onkeyup().bind(this);
  }

  // util

  onSearch() {
    const text = this.$input.value;
    if (!text) return;

    RecentlySearchStore.dispatch({ actionKey: 'ADD_SEARCH', item: text });
    this.$input.value = '';
  }

  onkeyup() {
    return debounce(() => {
      SearchInputStore.dispatch({ actionKey: 'SET_INPUT_VALUE', inputValue: this.$input.value });
    }, 500);
  }
}
