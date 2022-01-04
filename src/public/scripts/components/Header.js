import { $ } from "../utils/util.js";
import { Component } from "../core/Component.js";
import { HeaderTop, HeaderMenu } from "./headers/index.js";

export default class Header extends Component {
  setup() {}
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
