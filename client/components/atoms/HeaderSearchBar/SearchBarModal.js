import { Component } from '@core';
import { SearchFocusStore, SearchInputStore } from '@stores';
import { AutoCompleteContent } from './AutoCompleteContent';
import { RecentSearchContent } from './RecentSearchContent';
import { TopPopularContent } from './TopPopularContent';

const HIDE_MODAL_CLASSNAME = 'search__modal--hide';

export class SearchBarModal extends Component {
  setup() {
    this.hasInput = undefined;
  }

  template() {
    return /*html*/ `
        <div class="search__modal ${HIDE_MODAL_CLASSNAME}" tabindex="-1">
        </div>
    `;
  }
  rendered() {
    this.renderContent();
  }

  mounted() {
    this.$target.ontransitionend = () => {
      const { isSearchFocused } = SearchFocusStore.getState();
      if (!isSearchFocused) this.disactiveModal();
    };
    SearchInputStore.subscribe(this.renderContent.bind(this));
  }

  // util

  renderContent() {
    const { inputValue } = SearchInputStore.getState();
    const hasInput = !!inputValue;

    if (this.hasInput === hasInput) return;

    this.hasInput = hasInput;
    this.$target.innerHTML = '';
    if (hasInput) {
      new AutoCompleteContent(this.$target, { renderType: 'appendHTML' });
    } else {
      new RecentSearchContent(this.$target, { renderType: 'appendHTML' });
      new TopPopularContent(this.$target, { renderType: 'appendHTML' });
    }
  }

  showModal() {
    this.$target.classList.remove(HIDE_MODAL_CLASSNAME);
    this.$target.style.opacity = 1;
  }

  hideModal() {
    this.$target.style.opacity = 0;
  }

  disactiveModal() {
    this.$target.classList.add(HIDE_MODAL_CLASSNAME);
  }
}
