import Component from '../../../../../core/Component';
import './index.scss';

export default class RecentKeywords extends Component {
  setup() {
    const { keywords } = this.$props;
    this.$state = {
      keywords,
    };
  }

  template() {
    const { keywords } = this.$state;
    const title = `<strong class="suggestion_title">최근 검색어</strong>`;
    if (keywords.length === 0)
      return `
        ${title}
        <p class="no_recent_result">최근 검색 내역이 없습니다</p>
      `;
    return `
        ${title}
        <ul class="recent_list">
        ${keywords
          .map(
            (keyword) => `
          <li>
            <a class="recent_keyword_anchor">
              ${keyword}
            </a>
            <button class="removal_button">
              <span></span>
            </button>
          </li>
        `
          )
          .join('')}
        </ul>
    `;
  }

  getPastKeywords() {
    try {
      return JSON.parse(localStorage.getItem('search'));
    } catch {
      return [];
    }
  }

  deleteKeyword(keyword) {
    let searchedBefore = this.getPastKeywords();
    const index = searchedBefore.indexOf(keyword);
    if (searchedBefore.indexOf(keyword) > -1) {
      searchedBefore.splice(index, 1);
    }
    localStorage.setItem('search', JSON.stringify(searchedBefore));
    return searchedBefore;
  }

  setEvent() {
    const $deleteBtns = this.$target.getElementsByClassName('removal_button');
    [...$deleteBtns].forEach((button, index) => {
      const keywordToDelete = this.$state.keywords[index];
      button.addEventListener('click', () =>
        this.setState({ keywords: this.deleteKeyword(keywordToDelete) })
      );
    });
  }
}
