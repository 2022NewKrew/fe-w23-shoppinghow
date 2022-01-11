import { Component } from '@core';
import { RecentlySearchStore } from '@stores';
import { $ } from '@utils';

export class RecentSearchContent extends Component {
  template() {
    return /*html*/ `
        <div class="recentSearchContent">
            <span class="recentSearchContent__title">최근 검색어</span>
            <ol class="recentSearchContent__list"></ol>
        </div>
    `;
  }
  rendered() {
    this.$searchContentList = $('.recentSearchContent__list', this.$target);
    this.renderSearchContentList();
  }

  mounted() {
    this.$target.addEventListener('click', ({ target }) => {
      if (target.className === 'closeBtn') {
        const text = target.closest('.recentSearchContent__item').innerText;
        RecentlySearchStore.dispatch({ actionKey: 'delete', item: text });
      }
    });

    RecentlySearchStore.subscribe(this.renderSearchContentList.bind(this));
  }

  // util

  renderSearchContentList() {
    const { list } = RecentlySearchStore.getState();
    this.$searchContentList.innerHTML = list.slice(0, 5).map(this.searchItemTemplate).join('');
  }

  searchItemTemplate(text) {
    return /* html */ `
        <li class="recentSearchContent__item">
            <a href="?search=${text}">
                ${text}
            </a>
            <span class="closeBtn"></span>
        </li>
    `;
  }
}
