import { Component } from '@core';
import { Top10Store } from '@stores';
import { $ } from '@utils';
import { Top10Content } from './Top10Content';

const HIDE_TOP10MODAL_CLASSNAME = 'top10modal--hide';

export class SearchBarModal extends Component {
  template() {
    return /*html*/ `
        <div class="top10modal ${HIDE_TOP10MODAL_CLASSNAME}" tabindex="-1">
        </div>
    `;
  }
  rendered() {
    new Top10Content(this.$target, { renderType: 'appendHTML' });
  }

  showModal() {
    this.$target.classList.remove(HIDE_TOP10MODAL_CLASSNAME);
    this.$target.style.opacity = 1;
  }

  hideModal() {
    this.$target.style.opacity = 0;
  }

  disactiveModal() {
    this.$target.classList.add(HIDE_TOP10MODAL_CLASSNAME);
  }
}
