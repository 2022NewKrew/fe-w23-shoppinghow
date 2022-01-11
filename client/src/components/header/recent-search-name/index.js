import { $ } from '@/utils/helper';
import './index.scss';

export default class RecentSearchName {
  recentSearchNameList = [];

  constructor({ $parent, init }) {
    this.recentSearchName = document.createElement('div');
    this.recentSearchName.className = 'recent-search-name';
    this.recentSearchName.innerHTML = this.getFixedHTML();
    this.recentSearchUl = $('.recent-search-name__list', this.recentSearchName);
    this.recentSearchNameList = init;
    this.render();
    $parent.appendChild(this.recentSearchName);
  }

  setState(props) {
    this.recentSearchNameList = props.searchName;
    this.render();
  }

  render() {
    this.recentSearchUl.innerHTML = this.recentSearchNameList
      .map((name, index) => {
        return `<li class='recent-search-name__item'>
                  <span class='recent-search-name__item-name'>${name}</span>
                  <span class="recent-search-name__remove" data-idx=${index}>❌</span>
                </li>`;
      })
      .join('');
  }

  getFixedHTML() {
    return '<h2 class="recent-search-name__title">최근 검색어</h2><ul class="recent-search-name__list"></ul>';
  }
}
