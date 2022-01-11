import { Component } from '@core';
import { RecentlySearchStore } from '@stores';
import { $, getURLParams } from '@utils';

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

    this.$target.addEventListener('submit', (e) => {
      e.preventDefault();
      this.onSearch();
    });
  }

  mounted() {
    const { search } = getURLParams();
    if (search) this.$input.value = search;
  }

  onSearch() {
    const text = this.$input.value;
    if (!text) return;

    RecentlySearchStore.dispatch({ actionKey: 'search', item: text });
    this.$input.value = '';
  }
}
