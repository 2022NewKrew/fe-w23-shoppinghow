import TextRoller from '@/components/common/text-roller';
import HelpSearchContainer from '../help-search-container';
import SearchForm from '../search-form';
import './index.scss';
import { getItemInLocalStroage, removeItemInLocalStroage } from '@/utils/local-storage';

const cssNameForActivation = 'active';

export default class SearchContainer {
  state = {
    searchName: getItemInLocalStroage('search-name'),
  };

  constructor({ $parent }) {
    this.search = document.createElement('div');
    this.search.className = 'search';
    this.textRoller = new TextRoller({ $parent: this.search, onClick: this.activateInput.bind(this) });
    this.searchForm = new SearchForm({ $parent: this.search, onSubmit: this.refreshSearchNameState.bind(this) });
    this.helpSearchContainer = new HelpSearchContainer({ $parent: this.search });

    $parent.appendChild(this.search);

    this.search.addEventListener('mouseleave', this.deactivateInput.bind(this));
    this.search.addEventListener('click', this.handleClickHelpSearch.bind(this));
  }

  refreshSearchNameState() {
    this.state = { ...this.state, searchName: getItemInLocalStroage('search-name') };
    this.setState(this.state);
    this.searchForm.setInputValue('');
  }

  handleClickHelpSearch(e) {
    if (e.target.className === 'recent-search-name__remove') {
      removeItemInLocalStroage('search-name', e.target.dataset.idx);
      this.refreshSearchNameState();
    } else if (
      e.target.className === 'recent-search-name__item-name' ||
      e.target.className === 'hot-shopping-keyword__item-name'
    ) {
      this.searchForm.setInputValue(e.target.innerText);
    }
  }

  activateInput() {
    this.search.classList.add(cssNameForActivation);
    this.searchForm.focusInput();
    this.textRoller.deActivateRoller();
    this.helpSearchContainer.activate();
  }

  deactivateInput() {
    if (!this.searchForm.getInputLength()) {
      this.searchForm.blurInput();
      this.textRoller.deActivateRoller();
      this.textRoller.activateRoller();
    }
    this.search.classList.contains(cssNameForActivation) && this.search.classList.remove(cssNameForActivation);
    this.helpSearchContainer.deActivate();
  }

  setState(props) {
    this.state = { ...props, ...this.state };
    this.textRoller.setState(this.state);
    this.helpSearchContainer.setState(this.state);
  }
}
