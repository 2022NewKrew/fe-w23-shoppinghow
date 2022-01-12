import Component from '../../../core/Component';
import RollingKeywords from './RollingKeywords';
import Suggestion from './Suggestion';
import './index.scss';

export default class HeaderTop extends Component {
  setup() {
    this.$state = {
      keywords: [
        '차량용공기청정기',
        '칼도마살균기',
        '무선청소기',
        '관절영양제',
        '견과류선물세트',
        '인테리어의자',
        '편백나무찜기',
        '카드지갑',
        '롤러스케이트',
        '와인스토퍼',
      ],
    };
  }

  template() {
    return `
      <div class="title">
        <img class="title__img" src="//search1.daumcdn.net/search/cdn/simage/shopping/v2/common/nav/logo_shw_2021.png" alt="쇼핑하우">
      </div>
      <div class="search">
        <form>
          <input type="text" class="search__input">
          <button class="search_btn">
            <span class="search__icon"></span>
          </button>
        </form>
        <div class="rolling_keywords"></div>
        <div class="suggestion_wrapper"></div>
      </div>
    `;
  }

  mounted() {
    const $rollingKeywords = this.$('.rolling_keywords');
    new RollingKeywords($rollingKeywords, { keywords: this.$state.keywords });
    const $suggestion = this.$('.suggestion_wrapper');
    new Suggestion($suggestion, { keywords: this.$state.keywords });
  }

  setEvent() {
    const $searchInput = this.$('.search__input');
    const $rollingKeywords = this.$('.rolling_keywords');
    const $search = this.$('.search');
    const $suggestion = this.$('.suggestion_wrapper');
    const showSuggestion = () => {
      $rollingKeywords.style.display = 'none';
      $search.style.border = '1px solid #f95139';
      $suggestion.style.display = 'block';
    };
    const onMouseLeave = () => {
      setTimeout(() => {
        if ($searchInput.value === '') {
          $searchInput.blur();
          $rollingKeywords.style.display = '';
          $searchInput.value = '';
        }
        $search.style.border = '1px solid #cecfd1';
        $suggestion.style.display = 'none';
      }, 500);
    };
    const onInput = () => {
      if ($searchInput.value === '') showSuggestion();
      else {
        $suggestion.style.display = 'none';
        $search.style.border = '1px solid #f95139';
      }
    };
    $searchInput.addEventListener('focus', showSuggestion);
    $search.addEventListener('mouseleave', onMouseLeave);
    $searchInput.addEventListener('input', onInput);
  }
}
