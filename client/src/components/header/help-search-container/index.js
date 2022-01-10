import HotShoppingKeyword from '../hot-shopping-keyword';
import RecentSearchName from '../recent-search-name';
import './index.scss';
import { getItemInLocalStroage } from '@/utils/local-storage';

export default class HelpSearchContainer {
  constructor({ $parent, onClick }) {
    this.helpSearchContainer = document.createElement('div');
    this.helpSearchContainer.className = 'help-search-container';
    this.recentSearchName = new RecentSearchName({
      $parent: this.helpSearchContainer,
      init: getItemInLocalStroage('search-name'),
      onClick,
    });
    this.hotShoppingKeyword = new HotShoppingKeyword({
      $parent: this.helpSearchContainer,
    });

    $parent.appendChild(this.helpSearchContainer);
  }

  setState(props) {
    this.hotShoppingKeyword.setState(props);
    this.recentSearchName.setState(props);
  }

  activate() {
    this.helpSearchContainer.style.display = 'flex';
  }

  deActivate() {
    this.helpSearchContainer.style.display = 'none';
  }
}
