import { Component } from '@core';
import { RelatedSearchService } from '@services';
import { SearchInputStore } from '@stores';

export class AutoCompleteContent extends Component {
  template() {
    return /*html*/ `
        <div class="autoCompleteContent">
          연관검색어 로딩중
        </div>
    `;
  }
  rendered() {
    this.renderSuggestion();
  }

  mounted() {}

  // util

  async renderSuggestion() {
    const { inputValue } = SearchInputStore.getState();
    const suggestList = await RelatedSearchService.suggest(inputValue);

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
