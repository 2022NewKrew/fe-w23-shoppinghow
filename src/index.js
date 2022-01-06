import Component from './core/Component.js';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.scss';

class App extends Component {
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
    new Main($main, {});
    new Footer($footer, {});
  }
}

new App(document.querySelector('#app'));
