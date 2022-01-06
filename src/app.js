import Component from './core/Component.js';
import Container from './components/Container.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

export default class App extends Component {
  setup() {
    this.$state = {};
  }
  template() {
    return `
      <header></header>
      <div class="container"></div>
      <footer data-component="item-filter"></footer>
    `;
  }

  mounted() {
    const $header = this.$('header');
    const $main = this.$('.container');
    const $footer = this.$('footer');

    new Header($header, {});
    new Container($main, {});
    new Footer($footer, {});
  }
}
