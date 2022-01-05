import TextRoller from '@/components/common/text-roller';
import SearchForm from '../search-form';
import './index.scss';

const cssNameForActivation = 'active';

export default class SearchContainer {
  constructor({ $parent }) {
    this.search = document.createElement('div');
    this.search.className = 'search';
    this.textRoller = new TextRoller({ $parent: this.search, onClick: this.activateInput.bind(this) });
    this.searchForm = new SearchForm({ $parent: this.search });
    $parent.appendChild(this.search);

    this.search.addEventListener('mouseleave', this.deactivateInput.bind(this));
  }

  activateInput() {
    this.search.classList.add(cssNameForActivation);
    this.searchForm.focusInput();
    this.textRoller.deActivateRoller();
  }

  deactivateInput() {
    this.search.classList.contains(cssNameForActivation) && this.search.classList.remove(cssNameForActivation);
    this.searchForm.getInputLength() === 0 && this.searchForm.blurInput();
    console.log('this.searchForm.getInputLength() : ', this.searchForm.getInputLength());
  }

  setState(props) {
    this.textRoller.setState(props);
  }
}
