import { Component } from '@core';
import { Top10Store } from '@stores';

export class Top10Content extends Component {
  template() {
    const { list: top10List = [] } = Top10Store.getState();

    const top10ContentItem = ({ rank, text }) => /* html */ `
        <li>
            <a href="/search/${text}">
                <span class="top10content__rank">${rank}</span>
                ${text}
            </a>
        </li>
    `;

    return /*html*/ `
        <div class="top10content">
            <span class="top10content__title">인기 쇼핑 키워드</span>
            <ol class="top10content__keywrodList">
                ${top10List.slice(0, 5).map(top10ContentItem).join('')}
            </ol>
            <ol class="top10content__keywrodList">
                ${top10List.slice(5, 10).map(top10ContentItem).join('')}
            </ol>
        </div>
    `;
  }

  mounted() {
    Top10Store.subscribe(this.render.bind(this));
  }
}
