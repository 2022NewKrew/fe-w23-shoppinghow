import { Component } from '@core';
import { SearchInputStore } from '@stores';

export class AutoCompleteContent extends Component {
  template() {
    return /*html*/ `
        <div class="autoCompleteContent"></div>
    `;
  }
  rendered() {
    this.renderContent();
  }

  mounted() {
    SearchInputStore.subscribe(this.renderContent.bind(this));

    const { inputValue } = SearchInputStore.getState();
    SearchInputStore.dispatch('FETCH_SUGGEST', { inputValue });
  }

  // util

  renderContent() {
    const { inputValue, suggestList, loading } = SearchInputStore.getState();

    if (loading) {
      this.$target.innerText = '연관검색어 로딩중...';
      return;
    }

    if (!suggestList.length) {
      this.$target.innerText = '연관검색어가 없습니다.';
      return;
    }

    // prettier-ignore
    this.$target.innerHTML = suggestList.map((text) => /* html */`
      <a href="?search=${text}">
        ${text.replace(inputValue, `<span class="txt__hightlight">${inputValue}</span>`)}
      </a>
    `,).join('');
  }
}
