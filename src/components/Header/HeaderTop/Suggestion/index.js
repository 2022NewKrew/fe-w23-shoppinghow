import Component from '../../../../core/Component';
import RecentKeywords from './recentKeywords';
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

  getPastKeywords() {
    try {
      return JSON.parse(localStorage.getItem('search'));
    } catch {
      return [];
    }
  }

  addNewKeyword(keyword) {
    let searchedBefore = this.getPastKeywords();
    const index = searchedBefore.indexOf(keyword);
    if (searchedBefore.indexOf(keyword) > -1) {
      searchedBefore.splice(index, 1);
    }
    const newKeywords = [keyword, ...searchedBefore];
    localStorage.setItem('search', JSON.stringify(newKeywords));
    return newKeywords;
  }

  mounted() {
    const $suggestionRecent = this.$('.suggestion_recent');
    new RecentKeywords($suggestionRecent, { keywords: this.getPastKeywords() });
  }

  setEvent() {
    const keywordAnchors =
      this.$target.getElementsByClassName('keyword_anchor');
    const $suggestionRecent = this.$('.suggestion_recent');
    [...keywordAnchors].forEach((keyword, index) => {
      const keywordToStore = this.$props.keywords[index];
      keyword.addEventListener('click', () => {
        new RecentKeywords($suggestionRecent, {
          keywords: this.addNewKeyword(keywordToStore),
        });
      });
    });
  }
}
