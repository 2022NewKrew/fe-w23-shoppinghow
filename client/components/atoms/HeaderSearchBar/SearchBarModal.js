import { Component } from '@core';
import { RecentSearchContent } from './RecentSearchContent';
import { Top10Content } from './Top10Content';

const HIDE_MODAL_CLASSNAME = 'search__modal--hide';

export class SearchBarModal extends Component {
  template() {
    return /*html*/ `
        <div class="search__modal ${HIDE_MODAL_CLASSNAME}" tabindex="-1">
        </div>
    `;
  }
  rendered() {
    new RecentSearchContent(this.$target, { renderType: 'appendHTML' });
    new Top10Content(this.$target, { renderType: 'appendHTML' });
  }

  showModal() {
    this.$target.classList.remove(HIDE_MODAL_CLASSNAME);
    this.$target.style.opacity = 1;
  }

  hideModal() {
    this.$target.style.opacity = 0;
  }

  disactiveModal() {
    this.$target.classList.add(HIDE_MODAL_CLASSNAME);
  }
}
