import HotShoppingKeyword from '../hot-shopping-keyword';
import RecentSearchName from '../recent-search-name';
import AutoComplete from '../auto-complete';
import './index.scss';
import { getItemInLocalStroage } from '@/utils/local-storage';

export default class HelpSearchContainer {
  constructor({ $parent }) {
    this.helpSearchContainer = document.createElement('div');
    this.helpSearchContainer.className = 'help-search-container';
    this.recentSearchName = new RecentSearchName({
      $parent: this.helpSearchContainer,
      init: getItemInLocalStroage('search-name'),
    });
    this.hotShoppingKeyword = new HotShoppingKeyword({
      $parent: this.helpSearchContainer,
    });
    this.autoComplete = new AutoComplete({
      $parent: this.helpSearchContainer,
    });

    $parent.appendChild(this.helpSearchContainer);
  }

  setState(props) {
    this.hotShoppingKeyword.setState(props);
    this.recentSearchName.setState(props);
    this.autoComplete.setState(props);

    this.controlActivation(props.searchInput.length);
  }

  activate(inputLength) {
    this.helpSearchContainer.style.display = 'flex';
    this.controlActivation(inputLength);
  }

  deActivate() {
    this.helpSearchContainer.style.display = 'none';
  }

  controlActivation(length) {
    if (length) {
      this.autoComplete.activate();
      this.recentSearchName.deActivate();
      this.hotShoppingKeyword.deActivate();
      return;
    }
    this.autoComplete.deActivate();
    this.recentSearchName.activate();
    this.hotShoppingKeyword.activate();
  }
}
