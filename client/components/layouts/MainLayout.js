import { Component } from '@core';
import { $ } from '@utils';
import { Footer, Header } from '@components';

export class MainLayout extends Component {
  template() {
    return /*html*/ `
        <header></header>

        <main></main>

        <footer></footer>
    `;
  }

  rendered() {
    new Header($('header', this.$target), {
      renderType: 'replaceHTML',
    });

    new Footer($('footer', this.$target), {
      renderType: 'replaceHTML',
    });

    /**
     *  @type {HTMLElement}
     */
    this.$main = $('main', this.$target);
  }
}
