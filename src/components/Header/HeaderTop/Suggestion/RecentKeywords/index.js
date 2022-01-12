import Component from '@Core/Component.js';
import './index.scss';
import { deleteItem } from '@Utils/localStorage';

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

  setEvent() {
    const $deleteBtns = this.$target.getElementsByClassName('removal_button');
    [...$deleteBtns].forEach((button, index) => {
      const keywordToDelete = this.$state.keywords[index];
      button.addEventListener('click', () =>
        this.setState({ keywords: deleteItem('search', keywordToDelete) })
      );
    });
  }
}
