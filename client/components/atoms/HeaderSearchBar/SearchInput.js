import { Component } from '@core';
import { RecentlySearchStore, SearchInputStore } from '@stores';
import { $, debounce, prevent } from '@utils';

const WAIT_INPUT_TIME = 500;

export class SearchInput extends Component {
  setup() {
    this.suggestIndex = -1;
  }

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

    this.$target.onsubmit = this.onsearch.bind(this)();
    this.$input.onkeydown = this.onkeydown.bind(this);
    this.$input.onkeyup = this.onkeyup.bind(this)();
  }

  // util

  onsearch() {
    return prevent(() => {
      const text = this.$input.value;
      if (!text) return;

      RecentlySearchStore.dispatch('ADD_SEARCH', { item: text });
      this.$input.value = '';
    });
  }

  onkeydown(e) {
    const { suggestList } = SearchInputStore.getState();
    if (!suggestList.length) return;

    const maxIndex = suggestList.length - 1;

    switch (e.keyCode) {
      case 38: // Arrow Up
        e.preventDefault();
        this.suggestIndex = this.suggestIndex <= 0 ? maxIndex : this.suggestIndex - 1;
        this.$input.value = suggestList[this.suggestIndex];
        break;
      case 40: // Arrow Down
        e.preventDefault();
        this.suggestIndex = this.suggestIndex >= maxIndex ? 0 : this.suggestIndex + 1;
        this.$input.value = suggestList[this.suggestIndex];
        break;
      default:
        this.suggestIndex = -1;
        break;
    }
  }

  onkeyup() {
    return debounce(() => {
      const { inputValue } = SearchInputStore.getState();
      if (this.$input.value === inputValue) return;

      this.suggestIndex = -1;
      SearchInputStore.dispatch('SET_INPUT_VALUE', { inputValue: this.$input.value });
    }, WAIT_INPUT_TIME);
  }
}
