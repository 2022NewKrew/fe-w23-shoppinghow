import { $ } from "@utils/query.js";
import { Component } from "@core/Component.js";
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";

export default class Header extends Component {
  setUp() {}
  template() {
    return `
      <div class="header-top" component="header-top"></div>
      <div class="header-menu" component="header-menu"></div>
    `;
  }
  mounted() {
    const $headerTop = $('[component="header-top"', this.$target);
    const $headerMenu = $('[component="header-menu', this.$target);

    new HeaderTop($headerTop);
    new HeaderMenu($headerMenu);
  }
  setEvent() {}
}
