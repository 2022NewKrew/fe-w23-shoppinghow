import Component from '../../core/Component.js';
import './index.scss';
import HeaderTop from './HeaderTop';
import HeaderMenu from './HeaderMenu/index.js';

export default class Header extends Component {
  template() {
    return `
    <div class="header-top"></div>
    <div class="header-menu-wrapper"></div>
    `;
  }

  mounted() {
    const $headerTop = this.$('.header-top');
    new HeaderTop($headerTop, {});
    const $headerMenu = this.$('.header-menu-wrapper');
    new HeaderMenu($headerMenu, {});
  }
}
