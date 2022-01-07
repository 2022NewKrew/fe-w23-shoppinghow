import { Component } from '@core';
import { $ } from '@utils';
import { Footer, Header } from '@components';

export class MainLayout extends Component {
  /**
   *  @type {HTMLElement}
   */
  $main;

  template() {
    return /*html*/ `
        <header></header>

        <main></main>

        <footer></footer>
    `;
  }

  mounted() {
    new Header($('header', this.$target), {
      renderType: 'outerHTML',
      top10List: this.props.top10List,
    });

    new Footer($('footer', this.$target), {
      renderType: 'outerHTML',
    });

    this.$main = $('main', this.$target);
  }
}
