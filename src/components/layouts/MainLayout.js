import { Component } from '@core';
import { $ } from '@utils';
import { Footer, Header } from '@components';

export class MainLayout extends Component {
  $main;

  template() {
    return /*html*/ `
        <header></header>

        <main></main>

        <footer></footer>
    `;
  }

  mounted() {
    new Header($('header', this.$root));
    new Footer($('footer', this.$root));
    this.$main = $('main', this.$root);
  }
}
