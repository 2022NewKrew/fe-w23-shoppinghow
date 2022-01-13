import { Component } from '@core';
import { TopPopularStore } from '@stores';

export class TopPopularContent extends Component {
  template() {
    const { topPopularList } = TopPopularStore.getState();

    return /*html*/ `
        <div class="topPopularContent">
            <span class="topPopularContent__title">인기 쇼핑 키워드</span>
            <ol class="topPopularContent__keywrodList">
                ${topPopularList.slice(0, 5).map(this.topPopularItemTemplate).join('')}
            </ol>
            <ol class="topPopularContent__keywrodList">
                ${topPopularList.slice(5, 10).map(this.topPopularItemTemplate).join('')}
            </ol>
        </div>
    `;
  }

  topPopularItemTemplate({ rank, text }) {
    return /* html */ `
        <li>
            <a href="?search=${text}">
                <span class="topPopularContent__rank">${rank}</span>
                ${text}
            </a>
        </li>
    `;
  }

  mounted() {
    TopPopularStore.subscribe(this.render.bind(this));
  }
}
