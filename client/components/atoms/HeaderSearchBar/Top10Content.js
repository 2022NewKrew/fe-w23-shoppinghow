import { Component } from '@core';
import { Top10Store } from '@stores';

export class Top10Content extends Component {
  template() {
    const { list: top10List = [] } = Top10Store.getState();

    return /*html*/ `
        <div class="top10content">
            <span class="top10content__title">인기 쇼핑 키워드</span>
            <ol class="top10content__keywrodList">
                ${top10List.slice(0, 5).map(this.top10ItemTemplate).join('')}
            </ol>
            <ol class="top10content__keywrodList">
                ${top10List.slice(5, 10).map(this.top10ItemTemplate).join('')}
            </ol>
        </div>
    `;
  }

  top10ItemTemplate({ rank, text }) {
    return /* html */ `
        <li>
            <a href="?search=${text}">
                <span class="top10content__rank">${rank}</span>
                ${text}
            </a>
        </li>
    `;
  }

  mounted() {
    Top10Store.subscribe(this.render.bind(this));
  }
}
