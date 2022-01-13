import Component from '@Core/Component.js';
import RecentKeywords from './recentKeywords';
import { getLocalStorageList, addNewItem } from '@Utils/localStorage';
import './index.scss';

export default class Suggestion extends Component {
  template() {
    const leftKeywords = this.$props.keywords
      .slice(0, 5)
      .map(
        (keyword, index) => `
      <li>
        <a class="keyword_anchor">
          <span class="rank">${index + 1}</span>
          ${keyword}
        </a>
      </li>
    `
      )
      .join('');

    const rightKeywords = this.$props.keywords
      .slice(5)
      .map(
        (keyword, index) => `
      <li>
        <a class="keyword_anchor">
          <span class="rank">${index + 6}</span>
          <span class="keyword">${keyword}</span>
        </a>
      </li>
    `
      )
      .join('');

    return `
      <div class="suggestion_content suggestion_recent"></div>
      <div class="suggestion_content suggestion_keyword">
        <strong class="suggestion_title">인기 쇼핑 키워드</strong>
        <ol class="keyword_list">
          ${leftKeywords}
        </ol>
        <ol class="keyword_list right_list">
          ${rightKeywords}
        </ol>
      </div>
    `;
  }

  mounted() {
    const $suggestionRecent = this.$('.suggestion_recent');
    new RecentKeywords($suggestionRecent, {
      keywords: getLocalStorageList('search'),
    });
  }

  setEvent() {
    const keywordAnchors =
      this.$target.getElementsByClassName('keyword_anchor');
    const $suggestionRecent = this.$('.suggestion_recent');
    [...keywordAnchors].forEach((keyword, index) => {
      const keywordToSearch = this.$props.keywords[index];
      keyword.addEventListener('click', () => {
        alert(`${keywordToSearch} 를 검색합니다`);
        new RecentKeywords($suggestionRecent, {
          keywords: addNewItem('search', keywordToSearch),
        });
      });
    });
  }
}
